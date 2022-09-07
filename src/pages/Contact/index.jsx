import { useState } from 'preact/hooks'
import axios from 'axios'
import MainLayout from '../../layouts/Main'
import contact from './../../schemas/contact.json'

const Contact = () => {
  const [isDone, setIsDone] = useState(true)
  const { title, infos } = contact
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const onChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setIsDone(false)
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios
      .post('https://formsubmit.co/ajax/1fe4ad93467280811e8907a2eb282488', {
        firstName: details.firstName,
        lastName: details.lastName,
        email: details.email,
        message: details.message,
      })
      .then(() => {
        setIsDone(true)
        setDetails({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        })
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setTimeout(() => {
          setIsDone(false)
        }, 2000)
      })
  }

  return (
    <MainLayout className='py-4'>
      <div className='container mx-auto px-4 mt-8'>
        <h1 className='md:text-7xl text-4xl uppercase text-light-400'>
          {title}
        </h1>
        <div className='md:grid grid-cols-[1fr,2fr] mt-8 gap-4'>
          <div className='text-light-400'>
            {infos.map((info) => (
              <div className='mb-4'>
                <h6 className='text-2xl'>{info.title}</h6>
                <p>{info.value}</p>
              </div>
            ))}
          </div>
          <form onSubmit={onSubmit}>
            {isDone ? (
              <div
                class='bg-green-100 border border-light-green-400 text-green-700 mb-4 px-4 py-3 rounded relative'
                role='alert'
              >
                <span class='block sm:inline'>
                  Thank you for your message. It has been sent.
                </span>
              </div>
            ) : null}
            <div className='md:grid grid-cols-[1fr,1fr] gap-2'>
              <div className='mb-4 grid'>
                <label htmlFor='firstName' className='text-light-400'>
                  First Name
                </label>
                <input
                  type='text'
                  name='firstName'
                  id='firstName'
                  className='p-2'
                  onChange={onChange}
                />
              </div>
              <div className='mb-4 grid'>
                <label htmlFor='lastName' className='text-light-400'>
                  Last Name
                </label>
                <input
                  type='text'
                  name='lastName'
                  id='lastName'
                  className='p-2'
                  onChange={onChange}
                />
              </div>
            </div>
            <div className='mb-4 grid'>
              <label htmlFor='email' className='text-light-400'>
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='p-2'
                onChange={onChange}
              />
            </div>
            <div className='mb-4 grid'>
              <label htmlFor='message' className='text-light-400'>
                Message
              </label>
              <textarea
                name='message'
                id='message'
                className='p-2'
                onChange={onChange}
              />
            </div>
            <button type='submit' className='p-2 px-6 bg-light-400'>
              Send
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  )
}

export default Contact
