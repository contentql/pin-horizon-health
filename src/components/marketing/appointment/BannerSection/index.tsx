import Spacing from '@/components/marketing/appointment/BannerSection/spacing'

export default function Section({
  topMd = '_',
  topLg = '_',
  topXl = '_',
  bottomMd = '_',
  bottomLg = '_',
  bottomXl = '_',
  children,
  ...props
}: any) {
  return (
    <section {...props}>
      <Spacing md={topMd} lg={topLg} xl={topXl} />
      {children}
      <Spacing md={bottomMd} lg={bottomLg} xl={bottomXl} />
    </section>
  )
}
