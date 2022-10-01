import React from 'react'
import QuestionsList from "../../services/constants/QuestionsList"

const Faq = () => {
  return (
    <section className='px-12 mb-24'>
      <h2 className='text-5xl font-extrabold text-center mb-[0.25rem] text-indigo-600'>Frequently Asked Questions</h2>
      <div className='flex justify-center'>
        <div className='max-w-[463px] text-[17px] text-neutral-800'>
          With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 mt-10'>
        {QuestionsList.map((question, index) => (
          <div key={index} className='p-5'>
            <div className='font-bold text-indigo-600 text-[1.375rem]'>{question.question}</div>
            <div className='text-neutral-800'>{question.answer}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq
