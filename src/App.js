import './App.css';

function App() {
  return (
    <div className="App">
      <body class="flex items-start bg-[#121212]">
        <aside class="sticky top-0 bg-black w-[256px] h-screen text-[#b2b2b2] flex flex-col">
          <a href="#" class="text-white inline-block my-6 px-6 w-full">
            <svg viewBox="0 0 1134 340" class="w-[130px]"><title>Spotify</title><path fill="currentColor" d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"></path></svg>
          </a>
          <nav>
            <a href="#" class="flex items-center text-white bg-[#282828] mx-2 py-4 py-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <span class="ml-4 text-sm font-semibold">Home</span>
            </a>
            <a href="#" class="flex items-center hover:text-white  mx-2 py-4 py-2 rounded duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <span class="ml-4 text-sm font-semibold">Search</span>
            </a>
            <a href="#" class="flex items-center hover:text-white  mx-2 py-4 py-2 rounded duration-300 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
              </svg>
              <span class="ml-4 text-sm font-semibold">Your Library</span>
            </a>
            <a href="#" class="flex items-center hover:text-white  mx-2 py-4 py-2 rounded duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="ml-4 text-sm font-semibold">Create Playlist</span>
            </a>
            <a href="#" class="flex items-center hover:text-white  mx-2 py-4 py-2 rounded duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <span class="ml-4 text-sm font-semibold">Liked Songs</span>
            </a>
          </nav>
          <footer class="mt-auto mb-8 ml-6 text-left">
            <ul>
              <li>
                <a href="#" class="text-[11px] hover:underline py-2">Cookies</a>
              </li>
              <li>
                <a href="#" class="text-[11px] hover:underline py-2">Privacy</a>
              </li>
            </ul>
          </footer>
        </aside>
        <div class="flex-1">
          <header class="sticky top-0 bg-[#070707] flex-1 flex items-center justify-between py-[10px] px-[32px]">
            <div class="flex">
              <a class="mr-[8px] text-[#969696] p-1 cursor-not-allowed" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </a>
              <a class="ml-[8px] text-[#969696] p-1 cursor-not-allowed" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>
            <div>
              <button class=" text-[#fff] text-xs font-semibold leading-5 tracking-widest uppercase py-[9px] px-[38px] rounded-full hover:scale-105">Sign Up</button>
              <button class="bg-white text-[#2e2e2e] text-xs font-semibold leading-5 tracking-widest uppercase py-[9px] px-[38px] rounded-full hover:scale-105">Log In</button>
            </div>
          </header>
          <main class="text-white relative">
            <div class="h-[275px] bg-gradient-to-b from-[#1f1f1f] to-[#121212] absolute w-full"></div>
            <div class="relative pt-[24px] pb-[48px] px-[32px]">
              <div>
                <div class="flex justify-between items-end mb-[18px]">
                  <div>
                    <h2 class="text-2xl font-semibold hover:underline capitalize">
                      <a>Lorem, ipsum.</a>
                    </h2>
                  </div>
                  <a class="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6" href='#'>See all</a>
                </div>
                <div class="grid grid-cols-4 gap-5">
                  <a href='#' class="border h-[300px] "></a>
                  <a href='#' class="border h-[300px] "></a>
                  <a href='#' class="border h-[300px] "></a>
                  <a href='#' class="border h-[300px] "></a>
                </div>
              </div>
              <div>
                <div class="flex justify-between items-end mb-[18px]">
                  <div>
                    <h2 class="text-2xl font-semibold hover:underline capitalize">
                      <a>Lorem, ipsum.</a>
                    </h2>
                  </div>
                  <a class="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6" href='#'>See all</a>
                </div>
                <div class="grid grid-cols-4 gap-5">
                  <a href='#' class="border h-[300px] "></a>
                  <a href='#' class="border h-[300px] "></a>
                  <a href='#' class="border h-[300px] "></a>
                  <a href='#' class="border h-[300px] "></a>
                </div>
              </div>
              <div>
                <div class="flex justify-between items-end mb-[18px]">
                  <div>
                    <h2 class="text-2xl font-semibold hover:underline capitalize">
                      <a>Lorem, ipsum.</a>
                    </h2>
                  </div>
                  <a class="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6" href='#'>See all</a>
                </div>
                <div class="grid grid-cols-4 gap-5">
                  <a href='#' class="border h-[300px] "></a>
                  <a href='#' class="border h-[300px] "></a>
                  <a href='#' class="border h-[300px] "></a>
                  <a href='#' class="border h-[300px] "></a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </div>
  );
}

export default App;
