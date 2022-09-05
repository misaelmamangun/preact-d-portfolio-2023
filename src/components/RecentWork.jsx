import { useEffect, useState } from 'preact/hooks'
import sanityClient from './../lib/client'

const RecentWork = () => {
  const [work, setWork] = useState(null)
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project" && publishedAt < now()]|order(publishedAt desc)[0] {
        title,
        slug,
        publishedAt,
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

  return (
    <section className='container mx-auto px-4 mt-8'>
      <h1 className='md:text-7xl text-4xl uppercase text-light-400'>
        Recent Works
      </h1>
      <div className='mt-6'>
        <img src={work?.mainImage?.asset.url} alt='Recent Work' />
      </div>
    </section>
  )
}

export default RecentWork
