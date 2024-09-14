import React from 'react'
import { data } from './CardData'
// import mongodb from '../../public/imgs/mongodb.jpg'

const PortfolioSection = () => {

  // const cardItem = [
  //   {
  //     id : 1,
  //     'logo' : './imgs/mongodb.jpg',
  //     name : "MongoDB"
  //   },
  //   {
  //     id : 2,
  //     logo : './imgs/express.jpg',
  //     name : "ExpressJs"
  //   },
  //   {
  //     id : 3,
  //     logo : './imgs/reactjs.jpg',
  //     name : "ReactJs"
  //   },
  //   {
  //     id : 4,
  //     logo : './imgs/node.jpg',
  //     name : "NodeJs"
  //   }
  // ]
  return (
    <>
      <div name = "Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
            <span className='underline font-semibold'>Featured Projects</span>
        </div>

        <div>
          <ul className='grid grid-cols-1 md:grid-cols-4 gap-3 my-8'>
            {
              data.map((currCard) => {
                return (
                  <li key={currCard.id} className='md:w-[300px] md:h-[300px] border-2 rounded-lg hover:scale-110 duration-200 p-2 shadow-lg'>
                  <img src={currCard.logo} className='w-[120px] h-[120px] rounded-full border-2' alt="" />
                  <h1 className='font-bold mb-3 text-xl'>{currCard.name}</h1>
                  <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                  <div className='flex gap-2 md:justify-around items-center mt-7 px-4'>
                    <button className='bg-blue-600 hover:bg-blue-800 text-white rounded-lg p-2 px-4'>Video</button>
                    <button className='bg-green-600 hover:bg-green-800 text-white rounded-lg p-2 px-8'>Source Code</button>
                  </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default PortfolioSection
