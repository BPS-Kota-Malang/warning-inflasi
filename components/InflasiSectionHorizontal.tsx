'use client'

import React from 'react'
import { useState, useEffect } from 'react';

const InflasiSectionHorizontal = () => {

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
    <div id='inflasisection' className='h-screen w-full flex justify-center relative z-10 py-3'>
        <div className='w-full flex flex-col justify-left gap-2 '>
          <div className='flex flex-col w-full h-full place-items-left 2xl:px-28 2xl:pt-10 y-3'>
              <h1 className='font-sans font-extrabold md:tracking-wider mb-4 text-base md:text-lg lg:text-2xl'>Pilih Jenis Inflasi</h1>
              <select onChange={handleSelectChange}>
                <option value="https://lookerstudio.google.com/embed/reporting/6c9f250e-ca4f-4f88-b691-9a85da8afc27/page/SoLyD">Inflasi MtM</option>
                <option value="https://lookerstudio.google.com/embed/reporting/2497be2f-7273-4aa2-b610-3d5cf8e7b36e/page/SoLyD">Inflasi YoY</option>
                <option value="https://lookerstudio.google.com/embed/reporting/10eba437-8a23-4856-9f39-cb0ee3f2864b/page/SoLyD">Inflasi YtD</option>
              </select>

              {/** 
                 Iframe
              */}
              <iframe className='w-full h-full'
              src={iframeSrc}
              height= '90%'
              width= '90%'
              style = {{ border: 'none', marginTop: '20px' }}
              title = "Dynamic Iframe"
            />
            

            
          </div>
        </div>
    </div>
  )
}

export default InflasiSectionHorizontal

