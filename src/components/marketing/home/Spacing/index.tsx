export default function Spacing({ xl = '_', lg = '_', md = '_' }: any) {
  return (
    <div
      className={`cs_height_lg_${xl} cs_height_xl_${lg} cs_height_${md}`}></div>
  )
}
