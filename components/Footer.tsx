import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} BPS Kota Malang. All rights reserved.</p>
        <p className="text-sm">Developed by Bima Sakti Krisdianto</p>
      </div>
    </footer>
  )
}

export default Footer
