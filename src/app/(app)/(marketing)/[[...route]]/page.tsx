import { env } from '@env'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import type { Metadata, NextPage } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

import { blocksJSX } from '@/payload/blocks'
import { serverClient } from '@/trpc/serverClient'

type StaticRoute = { route: string | string[] | null }

const payload = await getPayloadHMR({
  config: configPromise,
})

interface PageProps {
  params: { route: string[] }
}

const Page: NextPage<PageProps> = async ({ params }) => {
  const syncParams = params

  try {
    const pageData = await serverClient.page.getPageData({
      path: syncParams?.route,
    })
    return (
      <div className='space-y-24'>
        {pageData?.blocks?.map((block, index) => {
          // Casting to 'React.FC<any>' to bypass TypeScript error related to 'Params' type incompatibility.
          const Block = blocksJSX[block.blockType] as React.FC<any>

          if (Block) {
            return <Block {...block} params={params} key={index} />
          }

          return <h3 key={block.id}>Block does not exist </h3>
        })}
      </div>
    )
  } catch (error: any) {
    console.error('Error: Page not found')
    notFound()
  }
}

export async function generateMetadata({
  params,
}: {
  params: { route: string[] }
}): Promise<Metadata | {}> {
  const payload = await getPayload({
    config: configPromise,
  })

  const { route } = params

  try {
    const { docs: pagesData } = await payload.find({
      collection: 'pages',
      depth: 5,
      overrideAccess: true,
      draft: false,
      where: {
        path: {
          equals: route,
        },
      },
    })

    const pageData = pagesData?.at(0)
    if (!pageData) {
      return 'page not found'
    }

    let metadata = pageData?.meta

    const block = pageData?.blocks
      ?.filter(block => block.blockType === 'Details')
      ?.at(0)

    // checking for dynamic page
    if (pageData?.isDynamic && block?.collectionSlug) {
      const { docs } = await payload.find({
        collection: block?.collectionSlug,
        where: {
          slug: {
            equals: route.at(-1) ?? '',
          },
        },
        depth: 5,
      })

      const doc = docs?.at(0)

      metadata = doc?.meta || {}
    }

    if (metadata && Object.keys(metadata).length) {
      let ogImage = []
      const title = metadata.title ?? ''
      const description = metadata.description ?? ''

      const titleAndDescription = {
        ...(title ? { title } : {}),
        ...(description ? { description } : {}),
      }

      if (
        metadata.image &&
        typeof metadata.image === 'object' &&
        metadata.image?.url
      ) {
        ogImage.push({
          url: metadata.image.url,
          height: 630,
          width: 1200,
          alt: `og image`,
        })
      }

      const hasOGData = ogImage.length && Object.keys(titleAndDescription)

      return {
        ...titleAndDescription,
        // we're appending the http|https int the env variable
        metadataBase: env.PAYLOAD_URL as unknown as URL,
        ...(hasOGData
          ? {
              openGraph: {
                ...titleAndDescription,
                images: ogImage,
              },
            }
          : {}),
        ...(hasOGData
          ? {
              twitter: {
                ...titleAndDescription,
                images: ogImage,
              },
            }
          : {}),
      }
    }

    return {}
  } catch (error) {
    // in error case returning empty object
    return {}
  }
}

// generate static-pages
const staticGenerationMapping = {
  blogs: payload.find({
    collection: 'blogs',
    pagination: false,
    draft: false,
  }),
  hospital: payload.find({
    collection: 'hospital',
    pagination: false,
    draft: false,
  }),
  doctors: payload.find({
    collection: 'doctors',
    pagination: false,
    draft: false,
  }),
} as const

export async function generateStaticParams(): Promise<StaticRoute[]> {
  const allPagesData = await serverClient.page.getAllPages()
  const staticParams: StaticRoute[] = []

  for (const page of allPagesData) {
    if (!page) {
      continue // Skip invalid pages
    }

    // If the route is dynamic (contains `[`)
    if (page?.path?.includes('[') && page.blocks) {
      const blockData = page.blocks.find(block => block.blockType === 'Details')

      // If it has a Details block with a valid collectionSlug
      if (blockData?.blockType === 'Details' && blockData.collectionSlug) {
        const slug = blockData.collectionSlug

        // Fetch all slugs for the given collection (e.g., blogs, tags, users)
        const data = await staticGenerationMapping[slug]

        if (data && Array.isArray(data)) {
          let path = ''
          for (const item of data) {
            if ('username' in item) {
              path = item.username
            } else if ('slug' in item) {
              path = `${item.slug}`
            }

            // Dynamically replace `[parameter]` with actual slug
            const dynamicPath = page.path.replace(/\[(.*?)\]/, path)

            staticParams.push({
              route: dynamicPath.split('/').filter(Boolean),
            })
          }
        }
        continue
      }
    }

    // Statics (non-dynamic paths)
    const nonDynamicPath = page?.path?.split('/').filter(Boolean)[0]
    if (nonDynamicPath) {
      staticParams.push({ route: [nonDynamicPath] })
    }
  }

  return staticParams
}

export default Page
