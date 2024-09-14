import React from 'react'
import { FaFacebook, FaLinkedinIn, FaNodeJs, FaReact, FaTelegram, FaYoutube } from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si';
import {SiExpress } from 'react-icons/si';
import {ReactTyped} from 'react-typed';

const Home = () => {
  return (
    <>
      <div name = "Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt:24 order-2 md:order-1'>
        <span className='text-xl'>Welcome In My Feed</span>
        <div className='flex gap-x-1 text-2xl md:text-4xl'>
        <h1 className=''>Hello, I'm a</h1>
        {/* <span className='text-red-700 font-bold'>Developer</span> */}
        <ReactTyped
                className='text-red-700 font-bold'
                strings={['Developer','Programmer','Coder']} 
                typeSpeed={40} 
                backSpeed={50}
                loop = {true}
                />
        </div>
        <br />
        <p className='text-justify text-sm md:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto esse ipsam officia aliquam. Rem sapiente veniam a omnis molestias necessitatibus suscipit maxime quis, aliquid repellat eum quasi blanditiis saepe deleniti.
        Aliquid ut dolor molestiae beatae, error quidem consequuntur provident dicta laudantium, itaque, nisi ab a aut eius sed ipsam commodi voluptatibus obcaecati velit repellat perferendis. Voluptates temporibus reiciendis nesciunt molestias!</p>
        <br />

        <div className='flex flex-col md:flex-row items-center gap-y-4 md:gap-y-0 justify-between'>
        <div className='space-y-2'>
            <h1 className='font-bold text-center'>Available on</h1>
            <ul className='flex gap-x-3 text-xl md:text-3xl cursor-pointer'>
            <li>
              <a href="https://www.facebook.com" target='/_blank'><FaFacebook/></a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target='_blank'><FaLinkedinIn/></a>
            </li>
            <li>
              <a href="https://www.telegram.com" target='_blank'><FaTelegram/></a>
            </li>
            <li>
              <a href="https://www.youtube.com" target='_blank'><FaYoutube/></a>
            </li>
            </ul>
        </div>

        <div className='space-y-2'>
            <h1 className='font-bold'>Currently Working On</h1>
            <ul className='flex items-center justify-center gap-x-3 text-xl md:text-3xl cursor-pointer'>
            <li className='hover:scale-110 hover:duration-200 rounded-full border-[2xl]'><SiMongodb/></li>
            <li className='hover:scale-110 hover:duration-200 rounded-full border-[2xl]'><SiExpress/></li>
            <li className='hover:scale-110 hover:duration-200 rounded-full border-[2xl]'><FaReact/></li>
            <li className='hover:scale-110 hover:duration-200 rounded-full border-[2xl]'><FaNodeJs/></li>
            </ul>
        </div>
        </div>

        </div>
        <div className='md:w-1/2 md:ml-48 md:mt-20 order-1'>
        <img src="./imgs/logo.jfif" className='h-[400px] w-[400px] rounded-full md:h-[450px] md:w-[450px]' alt="" />
        </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Home
