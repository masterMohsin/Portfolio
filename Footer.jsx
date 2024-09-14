import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaNodeJs, FaReact, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:20'>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex gap-4'>
                    <FaFacebook size={24} />
                    <FaTwitter size={24}/>
                    <FaInstagram size={24}/>
                    <FaLinkedinIn size={24}/>
                </div>
                <hr className='w-[340px] border-gray-700 mt-4'/>
                <div className='mt-8 flex flex-col justify-center items-center text-sm'>
                    <p>&copy; 2024 Company. All rights reserved.</p>
                    <p>Supportive Partner M Ali</p>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
