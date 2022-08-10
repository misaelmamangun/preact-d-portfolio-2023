import { useEffect, useState } from 'preact/hooks'
import MainLayout from '../../layouts/Main'
import sanityClient from './../../lib/client'

const Work = ({ slug }) => {
  const [work, setWork] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project" && slug.current == "${slug}"][0] {
        title,
        slug,
        mainImage {
          asset->{
            _id,
            url
          },
          alt
        },
        link,
      }`
      )
      .then((data) => {
        setWork(data)
      })
      .catch(console.error)
  }, [])

  const { title, mainImage, link } = work || {}

  return (
    <MainLayout className='py-4'>
      <div className='container mx-auto px-4 mt-8'>
        <h1 className='md:text-7xl text-4xl uppercase text-light-400 mb-6'>
          {title}
        </h1>
        <div>
          <img src={mainImage?.asset.url} />
        </div>
      </div>
    </MainLayout>
  )
}

export default Work
