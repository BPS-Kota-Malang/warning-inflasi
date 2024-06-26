import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'


const Hero = () => {
  return (
    <div className='pb-20 pt-36 bg-black relative overflow-hidden h-screen'>
      <div className=''>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
        <Spotlight className='top-28 left-80 h-[80vh- w-[59vw]' fill='blue'/>
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.03] flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
     
      </div>
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h1 className='uppercase tracking-widest text-base text-center text-blue-100 max-w-150'>
            DETEKSI DINI INFLASI BPS KOTA MALANG 
          </h1>

          <TextGenerateEffect
            className="text-center text-[30px] md:text-4xl lg:text-8xl"
            words='Inflasi Terdeteksi, Ekonomi Terkendali'
          />


          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
              Sebuah inovasi sederhana BPS Kota Malang untuk mengendalikan Inflasi
          </p>
          
          <div className='flex flex-col gap-5 mt-10 lg:flex-row lg:gap-10'>
            <a href='#coresection'>
              <MagicButton
                title="Inflasi Komoditas"
                icon={<FaLocationArrow/>}
                position='right'
              />
            </a>
            <a href='#inflasisection'>
              <MagicButton
                title="Inflasi Kota Malang"
                icon={<FaLocationArrow/>}
                position='right'
              />
            </a>

          </div>
            
        </div>
      </div>

      {/* <CoreSection/> */}
    </div>
  )
}

export default Hero
