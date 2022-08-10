import Footer from '../Footer'
import Header from '../Header'

const MainLayout = ({ children, className }) => {
  return (
    <>
      <Header />
      <main className={`min-h-screen ${className}`}>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
