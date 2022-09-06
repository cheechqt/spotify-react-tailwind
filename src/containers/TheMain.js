

function TheMain() {
  return (
    <main className="text-white relative">
      <div className="h-[275px] bg-gradient-to-b from-[#1f1f1f] to-[#121212] absolute w-full"></div>
      <div className="relative pt-[24px] pb-[48px] px-[32px] space-y-9  max-w-screen-5xl">
        <div>
          <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
            <div>
              <h2 className="text-2xl font-semibold hover:underline capitalize">
                <a href="/">Lorem, ipsum.</a>
              </h2>
            </div>
            <a className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6" href='/'>See all</a>
          </div>
          <div className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
            <a href='/' className="p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="sm:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="lg:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="xl:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="2xl:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="3xl:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="4xl:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="5xl:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="6xl:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
            <div className="text-left">
              <h2 className="text-2xl font-semibold hover:underline capitalize">
                <a href="/">Lorem, ipsum.</a>
              </h2>
              <p className="text-sm text-[#3b3b3b]">Lorem ipsum dolor sit amet.</p>
            </div>
            <a className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6" href='/'>See all</a>
          </div>
          <div className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
            <a href='/' className="p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="sm:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="lg:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="xl:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="2xl:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="3xl:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="4xl:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="5xl:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="6xl:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
            <div className="text-left">
              <h2 className="text-2xl font-semibold hover:underline capitalize">
                <a href="/">Lorem, ipsum.</a>
              </h2>
              <p className="text-sm text-[#3b3b3b]">Lorem ipsum dolor sit amet.</p>
            </div>
            <a className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6" href='/'>See all</a>
          </div>
          <div className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
            <a href='/' className="p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="sm:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="lg:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="xl:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="2xl:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="3xl:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="4xl:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="5xl:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
            <a href='/' className="6xl:block hidden p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative">
              <div className="relative">
                <img className="rounded shadow-lg" src="https://fakeimg.pl/600/7f1d1d/fff/?text=Cover&font=lobster" alt="123" />
                <button className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
              <p className="text-sm text-[#b3b3b3] line-clamp-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, deleniti iusto.
              </p>
              <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] hidden group-hover:block">
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library
                  </button>
                </li>
                <li className="relative">
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between">Share
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <ul className="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-0 left-full cursor-default z-10">
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist
                      </button>
                    </li>
                    <li>
                      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations
                  </button>
                </li>
                <li>
                  <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app
                  </button>
                </li>
              </ul>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default TheMain;