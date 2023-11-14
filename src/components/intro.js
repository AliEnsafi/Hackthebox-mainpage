import React from 'react'
import Cards from './cards'


const Intro = () => {
  return (
    <>
      <section className='myIntro mt-10'>
        <div className='intro-head flex justify-center'>
          <h1 className='text-2xl lg:text-5xl text-center text-white lg:w-2/5 font-bold'>The #1 cybersecurity upskilling platform.
          </h1>
        </div>
        <div className='intro-text flex justify-center text-center mt-10'>
          <div className='w-3/4 lg:w-1/2 text-lg'>
            <span className='text-gray-400'>
              Hack The Box gives individuals, businesses and universities the tools they need to
              continuously improve their cybersecurity capabilities
            </span>
            <span className='text-white'> — all in one place.</span>
          </div>
        </div>
        <Cards />
      </section>
    </>
  )
}

export default Intro