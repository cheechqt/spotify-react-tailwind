

function TheHeader() {
  return (
    <header className="sticky z-10 top-0 bg-[#070707] flex-1 flex items-center justify-between py-[10px] sm:px-[32px] px-[13px]">
      <div className="flex">
        <a className="mr-[8px] text-[#969696] p-1 -ml-1.5 inline-block lg:hidden" href="#sidebar">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </a>
        <a className="mr-[8px] text-[#969696] p-1 cursor-not-allowed" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </a>
        <a className="ml-[8px] text-[#969696] p-1 cursor-not-allowed" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </a>
      </div>
      <div className="">
        <button className=" text-[#fff] text-xs font-semibold leading-5 tracking-widest uppercase py-[9px] px-[17px] sm:px-[38px] rounded-full hover:scale-105">Sign Up</button>
        <button className="bg-white text-[#2e2e2e] text-xs font-semibold leading-5 tracking-widest uppercase py-[9px] px-[17px] sm:px-[38px] rounded-full hover:scale-105">Log In</button>
      </div>
    </header>
  )
}

export default TheHeader;