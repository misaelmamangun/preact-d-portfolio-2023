import MainLayout from '../../layouts/Main'
import suzakutwo from './../../assets/works/suzakutwo.png'
import Hero from './../../layouts/Hero'

const Main = () => {
  return (
    <MainLayout className='pb-4'>
      <Hero />
      <section className='container mx-auto px-4 mt-8'>
        <h1 className='md:text-7xl text-4xl uppercase text-light-400'>
          Recent Works
        </h1>
        <div className='mt-6'>
          <img src={suzakutwo} alt='Recent Work' />
        </div>
      </section>
    </MainLayout>
  )
}

export default Main
