import logo from './../../assets/settings/logo.png'

const Hero = () => {
  return (
    <>
      <div className='md:h-screen'>
        <div className='container mx-auto px-4 h-full'>
          <div className='md:grid items-center grid-cols-2 h-full h-full gap-4'>
            <div>
              <h1 className='md:text-7xl md:mt-0 text-4xl mt-4 uppercase text-light-400 border-b-4 mb-4'>
                Misael Paul Mamangun
              </h1>
              <p className='text-light-400 font-bold'>
                I'm a freelance web developer from the Philippines who is
                passionate about building simple, modern, and responsive
                website.
              </p>
            </div>
            <div>
              <img src={logo} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
