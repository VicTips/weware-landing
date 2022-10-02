import React from 'react'
import FeaturesList from "../../services/constants/FeaturesList"

const Features = () => {
  return (
    <section className='px-20 mb-24'>
      <div className='flex flex-wrap justify-center gap-14 mb-24'>
        {FeaturesList.map((feature, index) => (
          <div key={index} className='w-[306px]'>
            <div className='flex h-[307px] mb-4 relative'>
              <div className={`absolute w-full h-36 ${index === 1 || index === 4 ? 'bg-gradient-5-2 bottom-20' : 'bg-gradient-5-1 bottom-0'} -z-1`}></div>
              <img className='z-1 absolute' src={feature.img} alt={feature.name} />
            </div>
            <div className='text-indigo-600 font-bold text-xl'>{feature.name}</div>
            <div className='text-stone-600'>{feature.description}</div>
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
        <div className='w-[856px] h-[410px] bg-indigo-500 rounded-2xl relative flex items-center justify-end px-12'>
          <div className='absolute bg-gradient-5-3 h-[250px] w-[225px] -z-1 bottom-14 left-16'></div>
          <img className='absolute bottom-0 left-10' src='https://res.cloudinary.com/ds90phfgd/image/upload/v1664666460/wikit/Join_nsbjrl.png' alt='join' />
          <div className='text-white w-[445px]'>
            <h2 className='text-5xl font-extrabold pr-6'>Join today for early access!</h2>
            <div className='font-semibold text-lg my-6'>Create custom landing pages with Rareblocks that converts more visitors than any website. With lots of unique blocks, you can easily build a page.</div>
            <button className='text-lg font-bold text-indigo-700 bg-white rounded-lg px-7 py-2'>Get early access</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
