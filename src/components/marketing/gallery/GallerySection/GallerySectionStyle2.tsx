import Portfolio from '../../about/Portfolio'
import { GalleryType } from '@payload-types'

export default function GallerySectionStyle2({
  gallery,
}: {
  gallery: GalleryType['gallery']
}) {
  return (
    <div className='container'>
      <div className='cs_gallery_grid_2'>
        {gallery?.map((item, index) => (
          <div className='cs_grid_item' key={index}>
            <Portfolio item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
