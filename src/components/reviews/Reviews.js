import React from 'react'
import ReviewsList from "../../services/constants/ReviewsList"

const Reviews = () => {
  return (
    <section className='mb-24 px-10'>
      <h2 className='text-5xl font-extrabold text-center mb-[0.5rem] text-indigo-600'>
        What our customers are saying...
      </h2>
      <div className='text-center mb-20 text-neutral-800'>2,157 people have said how good we are</div>
      <div className='flex flex-wrap justify-center mt-10 px-48'>
        {ReviewsList.map((review, index) => (
          <div key={index} className='w-[381px] my-3 mx-4'>
            <div className='py-[1.625rem] px-[1.75rem] bg-stone-100 mb-5 rounded-xl'>{review.review}</div>
            <div className='flex gap-3'>
              <img src={review.img} alt={review.name} className='h-[43px] w-[43px]' />
              <div>
                <div className='font-bold text-indigo-600'>{review.name}</div>
                <div className='text-[0.875rem] text-gray-600'>{review.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews
