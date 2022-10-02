import React from 'react'
import Navbar from '../navbar/Navbar'

const Header = () => {
  return (
    <div>
      <Navbar />
      <div className='my-16 flex justify-evenly pl-6 items-center flex-wrap'>
        <div>
          <h1 className='text-[4.25rem] font-extrabold tracking-tight leading-none text-blue-950 max-w-[504px]'>Organized information for remote teams .</h1>
          <div className='text-blue-950 text-lg my-8 max-w-[533px]'>Easy to find knowledge, content and proceses. Team announcements, team engagement and profiles. 🙌</div>
          <button className='text-lg text-white bg-indigo-500 font-extrabold py-2 px-12 rounded-lg border hover:bg-indigo-400 border-indigo-800 shadow-md shadow-indigo-200 md:hover:scale-105'>Get early access</button>
          <div className='text-stone-600 mt-8'>We’re sending out invites all the time. 14 day free trial, no cc required.</div>
          <div className='flex text-amber-400 gap-0.5 mt-10'>
            {/* Star icons */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
          </div>
          <div className='text-indigo-600 text-lg font-bold my-3'>Truly needed as a remote-first company!</div>
          <div className='text-stone-600 max-w-[403px]'>Consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu, aliquam nulla tincidunt gravida. Cursus convallis dolor semper pretium ornare.</div>
          <div className='flex items-center gap-2 mt-3'>
            <img src='https://res.cloudinary.com/ds90phfgd/image/upload/v1664730617/wikit/Denny_gtnjn6.png' alt='Denny' />
            <div className='text-indigo-600 font-bold'>Denny Jones</div>
          </div>
        </div>
        <img src='https://res.cloudinary.com/ds90phfgd/image/upload/v1664680666/wikit/Header_oawuud.png' alt='header' />
      </div>
    </div>
  )
}

export default Header
