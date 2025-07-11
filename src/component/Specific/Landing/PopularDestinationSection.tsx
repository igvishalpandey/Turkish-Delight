import React from 'react'
import DestinationIconCard from './DestinationIconCard'
import { destinationFive, destinationFour, destinationOne, destinationThree, destinationTwo } from '@/images'

const PopularDestinationData = [
  {
    title: "Istanbul",
    image: destinationOne
  },
  {
    title: "Antalya",
    image: destinationTwo
  },
  {
    title: "Cappadocia",
    image: destinationThree
  },
  {
    title: "Ephesus",
    image: destinationFour
  },
  {
    title: "Konya",
    image: destinationFive
  },
]

const PopularDestinationSection = () => {

  return (
    <div className='bg-[#F5F5F5] min-h-80 flex justify-center items-center pt-30'>
      <h2 className='max-w-40 font-Inter text-2xl'>Popular Destinations</h2>
      <div className='flex flex-wrap justify-center items-center gap-6 p-8'>
        {PopularDestinationData.map((destination, index) => (
          <DestinationIconCard
            key={index}
            title={destination.title}
            image={destination.image}
          />
        ))}
      </div>

    </div>
  )
}

export default PopularDestinationSection