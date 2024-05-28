'use client'

import React from 'react'
import { useState, useEffect } from 'react';

const InflasiSectionVertical = () => {

/**
 * Define Iframe Source
 */
  const [iframeSrc, setIframeSrc] = useState('https://lookerstudio.google.com/embed/reporting/6c9f250e-ca4f-4f88-b691-9a85da8afc27/page/SoLyD');
  
  /**Event Handling */

  // const handleSelectChange = (event) => {
  //   setIframeSrc(event.target.value);
  // };

  /** Event Handling Chat GPT */
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIframeSrc(event.target.value);
  };

  return (
    <div id='inflasisection' className='h-screen w-full flex justify-center relative z-10'>
        <div className='w-full flex flex-col justify-left h-full gap-2 '>
          <div className='flex flex-col w-full h-1/3 place-items-left px-5 my-3 mx-0 lg:pl-40 md:pl-0 sm:pl-0 border rounded-md border-white-200/[.6]'>
              <h1 className='font-sans font-bold md:tracking-wider mb-4 text-base md:text-lg lg:text-2xl'>Inflasi Month to Month</h1>

              {/** 
                 Iframe
              */}
                <iframe className='flex-grow mt-2'
                src="https://lookerstudio.google.com/embed/reporting/6c9f250e-ca4f-4f88-b691-9a85da8afc27/page/SoLyD"
                title = "Dynamic Iframe"
              />
            
          </div>

          {/* /**
              Subsection 2
           */}
          <div className='flex flex-col w-full h-1/3 place-items-left px-5 my-3 mx-0 lg:pl-40 md:pl-0 sm:pl-0 border rounded-md border-white-200/[.6]'>
              <h1 className='font-sans font-bold md:tracking-wider mb-4 text-base md:text-lg lg:text-2xl'>Inflasi Year on Year</h1>
              {/** 
                 Iframe
              */}
              <iframe className='flex-grow mt-2'
              src="https://lookerstudio.google.com/embed/reporting/2497be2f-7273-4aa2-b610-3d5cf8e7b36e/page/SoLyD"
              // height= '90%'
              // width= '90%'
              title = "Dynamic Iframe"
            />
            

            
          </div>
          <div className='flex flex-col w-full h-1/3 place-items-left px-5 my-3 mx-0 lg:pl-40 md:pl-0 sm:pl-0 border rounded-md border-white-200/[.6]'>
              <h1 className='font-sans font-bold md:tracking-wider mb-4 text-base md:text-lg lg:text-2xl'>Inflasi Year to Date </h1>
              

              {/** 
                 Iframe
              */}
              <iframe className='flex-grow mt-2'
              src="https://lookerstudio.google.com/embed/reporting/10eba437-8a23-4856-9f39-cb0ee3f2864b/page/SoLyD"
              // height= '90%'
              // width= '90%'
              title = "Dynamic Iframe"
            />
            

            
          </div>
          
        </div>
    </div>
  )
}

export default InflasiSectionVertical

