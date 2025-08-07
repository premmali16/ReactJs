import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footerquiz'>
      
      <p>© {new Date().getFullYear()} Quiz App. All rights reserved.</p>
    </div>
  )
}

export default Footer