import RecentWork from '../../components/RecentWork'
import MainLayout from '../../layouts/Main'
import Hero from './../../layouts/Hero'

const Main = () => {
  return (
    <MainLayout className='pb-4'>
      <Hero />
      <RecentWork />
    </MainLayout>
  )
}

export default Main
