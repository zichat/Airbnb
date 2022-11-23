import React from 'react'

const Footer = () => {
  return (
    <footer className='grid grid-cols-2 md:grid-cols-4  px-16 py-14 bg-gray-100 text-gray-600'>
      
      <div className='space-y-4 text-xs text-gray-800'> 
        <h3 className='font-bold'>About</h3>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      
      <div className='space-y-4 text-xs text-gray-800'>
        <h3 className='font-bold'>Community</h3>
        <p>Accessbility</p>
        <p>This is not a real site</p>
        <p>its pretty clone</p>
        <p>Done Write</p>
        <p>Let Get Started</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h3 className='font-bold mt-10 md:mt-0'>Host</h3>
        <p>Papa React</p>
        <p>Presents</p>
        <p>Zero to Full learner</p>
        <p>Hudreds of Student</p>
        <p>Join Now</p>        
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h3 className='font-bold mt-10 sm:mt-0'>Support</h3>        
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Say Hi Youtube</p>
        <p>Easter Eggs</p>
        <p>For win</p>
      </div>
    </footer>
  )
}

export default Footer;