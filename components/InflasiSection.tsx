'use client'

import React from 'react'
import { useState, useEffect } from 'react';
import { Spotlight } from './ui/spotlight'
import { useMediaQuery } from 'react-responsive';
import InflasiSectionHorizontal from './InflasiSectionHorizontal';
import InflasiSectionVertical from './InflasiSectionVertical';


const InflasiSection = () => {

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

  /**
   *  Media Query
   */
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });


  return (
    <div  className='bg-black relative overflow-hidden'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className='top-20 left-full h-[40vh] w-[50vw]' fill='purple'/>
        <Spotlight className='top-34 left-80 h-[80vh- w-[59vw]' fill='blue'/>
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.03] flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
     
      </div>

      {isMobile && <InflasiSectionVertical />}
      {isTabletOrDesktop && <InflasiSectionHorizontal />}
      
    </div>
  )
}

export default InflasiSection

