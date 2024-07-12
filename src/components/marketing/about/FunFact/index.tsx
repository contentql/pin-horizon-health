export default function FunFact({
  statistic,
}: {
  statistic: {
    number?: string | null
    title?: string | null
    id?: string | null
  }
}) {
  return (
    <div className='cs_funfact cs_style_1 text-center'>
      <h2 className='cs_funfact_number cs_fs_72'>{statistic?.number}</h2>
      <p className='cs_funfact_title cs_heading_color m-0'>
        {statistic?.title}
      </p>
    </div>
  )
}
