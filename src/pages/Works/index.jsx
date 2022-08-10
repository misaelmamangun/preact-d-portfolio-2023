import { useEffect, useState } from 'preact/hooks'
import MainLayout from '../../layouts/Main'
import sanityClient from './../../lib/client'

const Works = () => {
  const [works, setWorks] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"] {
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
        setWorks(data)
      })
      .catch(console.error)
  }, [])

  return (
    <MainLayout className='py-4'>
      <div className='container mx-auto px-4 mt-8'>
        <h1 className='md:text-7xl text-4xl uppercase text-light-400 mb-6'>
          Works
        </h1>
        <div className='md:columns-3 gap-3 space-y-4'>
          {works &&
            works.map(({ mainImage, slug, title, link }) => (
              <div
                className='bg-gray-200 break-inside-avoid relative'
                key={slug.current}
              >
                <img src={mainImage.asset.url} />
                <div className='hover:opacity-100 ease-linear duration-300 opacity-0 static'>
                  <div className='absolute w-full h-full flex flex-col items-center justify-center top-0 bg-gray-800 bg-opacity-70'>
                    <h2 className='text-2xl text-light-400 uppercase font-bold'>
                      {title}
                    </h2>
                    <div className='mt-4 flex gap-2'>
                      <a
                        href={`/work/${slug.current}`}
                        className='p-2 px-6 border-3 uppercase text-light-400 font-600'
                      >
                        View
                      </a>
                      <a
                        href={link}
                        target={'_blank'}
                        className='p-2 px-6 border-3 uppercase text-light-400 font-600'
                      >
                        Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default Works
