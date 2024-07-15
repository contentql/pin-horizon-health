import { GalleryType } from '@payload-types'

import Section from '@/components/common/Section'
import GallerySectionStyle2 from '@/components/marketing/gallery/GallerySection/GallerySectionStyle2'

const Gallery = (data: GalleryType) => {
  return (
    <Section
      topMd={170}
      topLg={150}
      topXl={110}
      bottomMd={200}
      bottomLg={150}
      bottomXl={110}>
      <GallerySectionStyle2 gallery={data?.gallery} />
    </Section>
  )
}

export default Gallery
