import React from 'react'
import { data, expData } from './CardData'
// import mongodb from '../../public/imgs/mongodb.jpg'

const PortfolioSection = () => {

  
  return (
    <>
      <div name = "Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Experience</h1>
            <p className=' font-semibold'>I've more than 2 years experience in below technologies.</p>
        </div>

        <div>
          <ul className='grid grid-cols-2 md:grid-cols-4 gap-7 my-16'>
            {
              expData.map((currCard) => {
                return (
                  <li key={currCard.id} className='md:w-[250px] md:h-[250px] flex flex-col justify-center items-center border-2 rounded-full hover:scale-110 duration-200 p-6 shadow-md'>
                  <img src={currCard.logo} className='w-[180px] rounded-full' alt="" />
                  <h1 className='font-bold mb-3 text-xl'>{currCard.name}</h1>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <hr />
    </>
  )
}

export default PortfolioSection
