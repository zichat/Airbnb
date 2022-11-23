import React from 'react'
import MediumCard from './MediumCard'

const LiveAnyWhere = ({cardData}) => {
  return (
    <section>
        <h2 className='text-4xl font-semibold py-8'>Live Any Where</h2>
        <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3'>
            {cardData?.map((items, index) =>(
                <MediumCard key={index} img={items.img} title={items.title}/>
            ))}
        </div>
    </section>
  )
}

export default LiveAnyWhere