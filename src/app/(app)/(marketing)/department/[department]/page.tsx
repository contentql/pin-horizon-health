interface PageProps {
  params: {
    department: string
  }
}
const page = ({ params }: PageProps) => {
  console.log(params)
  return <div>page</div>
}

export default page
