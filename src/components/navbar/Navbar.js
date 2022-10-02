import React, { useState } from 'react'

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <nav>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:justify-center">
            <div className="flex-1 items-center md:hidden">
              {/* Mobile menu button */}
              <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-stone-600 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setExpanded(!expanded)}>
                <span className="sr-only">Open main menu</span>
                {/* Changes icon based on state */}
                {expanded ? <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg> : <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>}
              </button>
            </div>
            <div className="flex items-center justify-center md:justify-start flex-1">
              <img className="block" src="https://res.cloudinary.com/ds90phfgd/image/upload/v1664642931/wikit/wikit-log_l4zczr.png" alt="logo" />
            </div>
            <div className="hidden md:block">
              <div className="flex space-x-4">
                <div className="text-stone-600 block px-3 py-2 rounded-md font-extrabold cursor-pointer">Features</div>
                <div className="text-stone-600 block px-3 py-2 rounded-md font-extrabold cursor-pointer">Pricing</div>
                <div className="text-stone-600 block px-3 py-2 rounded-md font-extrabold cursor-pointer">Blog</div>
                <div className="text-stone-600 block px-3 py-2 rounded-md font-extrabold cursor-pointer">What's new?</div>
              </div>
            </div>
            <div className='flex-1 flex items-center justify-end'>
              <button className='font-extrabold text-white bg-indigo-500 hover:bg-indigo-600 px-3 py-2 rounded-lg border border-indigo-800 shadow-md shadow-indigo-200'>
                Get early access
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${!expanded && 'hidden'} md:hidden`} id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <div className="text-stone-600 hover:bg-indigo-400 hover:text-white px-3 py-2 rounded-md font-extrabold cursor-pointer">Features</div>
          <div className="text-stone-600 hover:bg-indigo-400 hover:text-white px-3 py-2 rounded-md font-extrabold cursor-pointer">Pricing</div>
          <div className="text-stone-600 hover:bg-indigo-400 hover:text-white px-3 py-2 rounded-md font-extrabold cursor-pointer">Blog</div>
          <div className="text-stone-600 hover:bg-indigo-400 hover:text-white px-3 py-2 rounded-md font-extrabold cursor-pointer">What's new?</div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
