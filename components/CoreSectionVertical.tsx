'use client'

import React from 'react'
import { useState, useEffect } from 'react';
import { Spotlight } from './ui/spotlight'

const CoreSectionVertical = () => {

/**
 * Define Iframe Source
 */
  const [iframeSrc, setIframeSrc] = useState('https://lookerstudio.google.com/embed/reporting/3480de0a-2239-41bd-99a3-234ac4703f9d/page/SoLyD');
  
  /**Event Handling */

  // const handleSelectChange = (event) => {
  //   setIframeSrc(event.target.value);
  // };

  /** Event Handling Chat GPT */
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIframeSrc(event.target.value);
  };

  return (
    <div id='coresection' className='h-screen w-full flex justify-center relative z-10'>
        <div className='w-full flex flex-col justify-left h-full gap-2 '>
          <div className='flex flex-col w-full h-1/3 place-items-left px-5 my-3 mx-0 lg:pl-40 md:pl-0 sm:pl-0 border rounded-md border-white-200/[.6]'>
              <h1 className='font-sans font-bold md:tracking-wider mb-4 text-base md:text-lg lg:text-2xl'>Pilih Komoditas Bahan Pokok</h1>
              <select onChange={handleSelectChange}>
                <option value="https://lookerstudio.google.com/embed/reporting/a9feab30-f48c-4099-997c-dd89a0780405/page/SoLyD">Beras</option>
                <option value="https://lookerstudio.google.com/embed/reporting/9f7d927a-e8e3-4a36-b698-bdbc20d76349/page/SoLyD">Gula Pasir</option>
                <option value="https://lookerstudio.google.com/embed/reporting/8ba2d727-88aa-42a8-9f9b-1266b1c661de/page/SoLyD">Mie Kering Instan</option>
                <option value="https://lookerstudio.google.com/embed/reporting/680cb494-a0be-4a33-a066-e5bcc2cf6ad3/page/SoLyD">Minyak Goreng</option>
                <option value="https://lookerstudio.google.com/embed/reporting/d3f7a197-4028-4dc9-9f61-66805db0f388/page/SoLyD">Susu Bubuk</option>
                <option value="https://lookerstudio.google.com/embed/reporting/321b4d77-94c3-45ef-aca0-972da77f7422/page/SoLyD">Susu Bubuk Balita</option>
                <option value="https://lookerstudio.google.com/embed/reporting/dda9babf-b389-4b85-8648-b276910fccbd/page/SoLyD">Tahu</option>
                <option value="https://lookerstudio.google.com/embed/reporting/0a221f3c-11df-4a0c-8d7e-d3e5c8985a3e/page/SoLyD">Telur Ayam Ras</option>
                <option value="https://lookerstudio.google.com/embed/reporting/d7eb32d7-3bf5-45fd-9938-181b3fe1d40c/page/SoLyD">Tempe</option>
                <option value="https://lookerstudio.google.com/embed/reporting/3fcafba8-b1be-4f3b-86e6-2500566f8f6b/page/SoLyD">Tepung Terigu</option>
              </select>

              {/** 
                 Iframe
              */}
                <iframe className='flex-grow mt-2'
                src={iframeSrc}
                title = "Dynamic Iframe"
              />
            
          </div>

          {/* /**
              Subsection 2
           */}
          <div className='flex flex-col w-full h-1/3 place-items-left px-5 my-3 mx-0 lg:pl-40 md:pl-0 sm:pl-0 border rounded-md border-white-200/[.6]'>
              <h1 className='font-sans font-bold md:tracking-wider mb-4 text-base md:text-lg lg:text-2xl'>Pilih Komoditas Sayur dan Buah</h1>
              <select onChange={handleSelectChange}>
                <option value="https://lookerstudio.google.com/embed/reporting/3480de0a-2239-41bd-99a3-234ac4703f9d/page/SoLyD">Bawang Merah</option>
                <option value="https://lookerstudio.google.com/embed/reporting/7f0b1b8f-6f66-4700-9a66-fc42eb63e4be/page/SoLyD">Bawang Putih</option>
                <option value="https://lookerstudio.google.com/embed/reporting/d09577ac-43f4-4048-bfa5-f1fbba9a9ad2/page/SoLyD">Cabai Merah</option>
                <option value="https://lookerstudio.google.com/embed/reporting/6c37226a-5a2d-43ee-a94d-281dc869c520/page/SoLyD">Cabai Rawit</option>
                <option value="https://lookerstudio.google.com/embed/reporting/9b123428-6cba-453d-8ae5-ea16c0d766eb/page/SoLyD">Jeruk</option>
                <option value="https://lookerstudio.google.com/embed/reporting/9e3cdc2a-6f43-44af-9874-0ab269d085d9/page/SoLyD">Pisang</option>
              </select>

              {/** 
                 Iframe
              */}
              <iframe className='flex-grow mt-2'
              src={iframeSrc}
              // height= '90%'
              // width= '90%'
              title = "Dynamic Iframe"
            />
            

            
          </div>
          <div className='flex flex-col w-full h-1/3 place-items-left px-5 my-3 mx-0 lg:pl-40 md:pl-0 sm:pl-0 border rounded-md border-white-200/[.6]'>
              <h1 className='font-sans font-bold md:tracking-wider mb-4 text-base md:text-lg lg:text-2xl'>Pilih Komoditas Ikan dan Daging</h1>
              <select onChange={handleSelectChange}>
                <option value="https://lookerstudio.google.com/embed/reporting/b2bba04c-c581-4261-a225-221889035dde/page/SoLyD">Daging Ayam Ras</option>
                <option value="https://lookerstudio.google.com/embed/reporting/62b1890e-3b3e-424d-85c2-8605f4d4734e/page/SoLyD">Daging Sapi</option>
                <option value="https://lookerstudio.google.com/embed/reporting/d1076866-612e-449e-8f05-9bc1a4aa1e91/page/SoLyD">Ikan Kembung</option>
                <option value="https://lookerstudio.google.com/embed/reporting/18dc57de-04da-4efe-afd1-b24c0b5fcb32/page/SoLyD">Udang Basah</option>
              </select>

              {/** 
                 Iframe
              */}
              <iframe className='flex-grow mt-2'
              src={iframeSrc}
              // height= '90%'
              // width= '90%'
              title = "Dynamic Iframe"
            />
            

            
          </div>
          
        </div>
    </div>
  )
}

export default CoreSectionVertical

