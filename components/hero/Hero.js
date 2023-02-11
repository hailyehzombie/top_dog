import React from 'react'

const Hero = () => {
  return (
    <div className=" mx-auto w-full h-screen  overflow-hidden ">

      <div className='hero-div'>

        <div className='hero-text mt-[80px]'>
          <div>
            <h1 className='hero-h1'>Rahul Rajput</h1>
            <h2 className='hero-h2'>The Dog Trainer</h2>
          </div>
          <p className='hero-p '>Dog training is the application of behavior analysis which uses the environmental events of antecedents and consequences to modify the dog behavior, either for it to assist in specific activities or undertake particular tasks, or for it to participate effectively in contemporary domestic life.</p>
        </div>

        <div className='hero-img-div'>
          <img src="/grooming.jpg" alt="hero-img" />
        </div>

      </div>










    </div>
  )
}

export default Hero