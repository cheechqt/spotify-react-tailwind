function Details({playlistData}) {
 return (
   <div className="pt-6 px-8 pb-6 grid md:grid-cols-playlistDetails md:gap-x-6 grid-cols-1fr gap-x-2">
     <div className="md:w-[232px] md:h-[232px] w-[125px] h-[125px]">
       <img
         src={playlistData.imgUrl}
         className="w-full h-full shadow-playlistImg"
         alt="playlist cover"
       />
     </div>
     <div className="flex flex-col justify-end">
       <h3 className="text-xs font-bold m-0 mt-1 tracking-tight uppercase">
         {playlistData.type}
       </h3>
       <h1 className="overflow-hidden m-0 py-[2px] md:text-[96px] md:leading-[96px] text-8 leading-8 font-bold tracking-tighter">
         {playlistData.title}
       </h1>
       <div className="flex items-center mt-4 maxmd:justify-center">
         <figure className="w-6 h-6 m-0 inline-block">
           <img
             className="rounded-full w-full h-full object-cover"
             src={playlistData.imgUrl}
             alt="playlist cover"
           />
         </figure>
         <p className="text-sm leading-4 font-bold m-0 ml-[6px]">
           {playlistData.artist}
         </p>
       </div>
     </div>
   </div>
 );
};

export default Details