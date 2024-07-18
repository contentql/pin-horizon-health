interface List2Props {
  heading: string
  iconUrl: string
  data:
    | Array<
        | { highlight?: string | null; id?: string | null }
        | { service?: string | null; id?: string | null }
      >
    | null
    | undefined
}

export default function List2({ heading, iconUrl, data }: List2Props) {
  return (
    <div className='cs_list cs_style_1'>
      <ul>
        {data?.map((item, index) => (
          <li key={index}>
            {'highlight' in item && item.highlight && (
              <p className='cs_medium cs_heading_color mb-0'>
                {item.highlight}
              </p>
            )}
            {'service' in item && item.service && (
              <p className='cs_medium cs_heading_color mb-0'>{item.service}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
