import React from 'react'

const Brands = () => {
  return (
    <>
      <section className='brands px-20'>
        <div className='brands-img grid grid-cols-3 lg:flex lg:justify-between my-20 lg:mt-10 lg:mb-0'>
          <div><img alt='logo1' src='./images/easports-logo.png' /></div>
          <div><img alt='logo2' src='./images/intel-logo.png' /></div>
          <div><img alt='logo3' src='./images/akerva-logo.png' /></div>
          <div><img alt='logo4' src='./images/deloitte-logo.png' /></div>
          <div><img alt='logo5' src='./images/synack-logo.png' /></div>
          <div><img alt='logo6' src='./images/boozallen.png' /></div>
        </div>
        <div className='brands-text mt-5'>
          <p className='text-center text-gray-300 text-lg'>Trusted by the world’s most ambitious cybersecurity teams.</p>
        </div>
      </section>
    </>
  )
}

export default Brands