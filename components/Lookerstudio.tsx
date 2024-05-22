import { useState } from 'react';

const Lookerstudio = () => {
  const [iframeSrc, setIframeSrc] = useState('https://lookerstudio.google.com/embed/reporting/3480de0a-2239-41bd-99a3-234ac4703f9d/page/SoLyD');

  const handleSelectChange = (event) => {
    setIframeSrc(event.target.value);
  };

  return (
    <div className='w-full flex flex-col h-full gap-2'>
      <div>
        <h1 className='ttext-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Pilih Komoditas</h1>
        <select onChange={handleSelectChange}>
          <option value="https://lookerstudio.google.com/embed/reporting/3480de0a-2239-41bd-99a3-234ac4703f9d/page/SoLyD">1</option>
          <option value="https://lookerstudio.google.com/embed/reporting/7f0b1b8f-6f66-4700-9a66-fc42eb63e4be/page/SoLyD">Another Example</option>
          <option value="https://lookerstudio.google.com/embed/reporting/a9feab30-f48c-4099-997c-dd89a0780405/page/SoLyD">Yet Another Example</option>
        </select>
      </div>
      
      <div className='w-full h-full my-10 mx-10'>
      <iframe
        src={iframeSrc}
        height= '100%'
        width= '100%'
        style = {{ border: 'none', marginTop: '20px' }}
        title = "Dynamic Iframe"
      />
      </div>
      
    </div>
  );
};

export default Lookerstudio;
