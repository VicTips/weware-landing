import React, { useState } from 'react'

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <nav>
      <div className="mx-auto md:px-6 lg:px-8 py-3">
        <div className="md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between flex-1 md:px-0 px-4">
            <img className="block" src="https://res.cloudinary.com/ds90phfgd/image/upload/v1664642931/wikit/wikit-log_l4zczr.png" alt="logo" />
            <div className="items-center md:hidden">
              {/* Mobile menu button */}
              <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-stone-600 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setExpanded(!expanded)}>
                <span className="sr-only">Open main menu</span>
                {/* Changes icon based on state */}
                {expanded ? <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg> : <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>}
              </button>
            </div>
          </div>
          <ul className={`md:flex md:items-center z-1 md:z-auto md:static absolute bg-white md:w-auto w-full pl-5 mt-2 md:mt-0 md:pl-0 md:opacity-100 transition-all ease-in duration-500 ${expanded ? 'opacity-100 left-0' : 'opacity-0 left-full'}`}>
            <li className="text-stone-600 block px-3 py-2 rounded-md font-extrabold cursor-pointer">Features</li>
            <li className="text-stone-600 block px-3 py-2 rounded-md font-extrabold cursor-pointer">Pricing</li>
            <li className="text-stone-600 block px-3 py-2 rounded-md font-extrabold cursor-pointer">Blog</li>
            <li className="text-stone-600 block px-3 py-2 rounded-md font-extrabold cursor-pointer">What's new?</li>
          </ul>
          <div className={`flex-1 md:flex md:items-center md:justify-end z-1 md:z-auto md:static absolute bg-white mt-[168px] md:mt-0 md:w-auto w-full pb-4 md:py-0 pl-5 md:pl-0 md:opacity-100 transition-all ease-in duration-500 ${expanded ? 'opacity-100 left-0' : 'opacity-0 left-full'}`}>
            <button className='font-extrabold text-white bg-indigo-500 hover:bg-indigo-400 px-3 py-2 rounded-lg border border-indigo-800 shadow-md shadow-indigo-200'>
              Get early access
            </button>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
