import { Page, SiteSetting } from '@payload-types'

const getSlugs = ({
  redirectionLinks,
}: {
  redirectionLinks: SiteSetting['redirectionLinks']
}) => {
  const ayurvedaLink = redirectionLinks?.ayurvedaLink?.value as Page
  const blogLink = redirectionLinks?.blogLink?.value as Page
  const hospitalLink = redirectionLinks?.hospitalLink?.value as Page
  const yogaLink = redirectionLinks?.yogaLink?.value as Page
  const doctorLink = redirectionLinks?.doctorLink?.value as Page
  const blogSlug =
    blogLink && typeof blogLink !== 'string' ? blogLink.path! : ''
  const slicedBlogSlug = blogSlug ? blogSlug.split('[')[0] : ''
  const doctorSlug =
    doctorLink && typeof doctorLink !== 'string' ? doctorLink.path! : ''
  const slicedDoctorSlug = doctorLink ? doctorSlug.split('[')[0] : ''
  const yogaSlug =
    yogaLink && typeof yogaLink !== 'string' ? yogaLink.path! : ''
  const slicedYogaSlug = yogaSlug ? yogaSlug.split('[')[0] : ''
  const ayurvedaSlug =
    ayurvedaLink && typeof ayurvedaLink !== 'string' ? ayurvedaLink.path! : ''
  const slicedAyurvedaSlug = ayurvedaSlug ? ayurvedaSlug.split('[')[0] : ''
  const hospitalSlug =
    hospitalLink && typeof hospitalLink !== 'string' ? hospitalLink.path! : ''
  const slicedHospitalSlug = hospitalSlug ? hospitalSlug.split('[')[0] : ''
  return {
    blog: slicedBlogSlug,
    doctor: slicedDoctorSlug,
    ayurveda: slicedAyurvedaSlug,
    yoga: slicedYogaSlug,
    hospital: slicedHospitalSlug,
  }
}
export default getSlugs
