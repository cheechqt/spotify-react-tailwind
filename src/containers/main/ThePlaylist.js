// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import TheHeader from "components/TheHeader/TheHeader";
// import PlayButton from "component/buttons/play-button";
// import IconButton from "component/buttons/icon-button";
// import PlaylistDetails from "component/playlist/playlist-details";
// import PlaylistTrack from "component/playlist/playlist-track";
// import * as Icons from "component/icons";
// import { PLAYLIST } from "data/index";

// function ThePlaylist(props) {
//   const [playlistIndex, setPlaylistIndex] = useState(undefined);
//   const [isthisplay, setIsthisPlay] = useState(false);
//   const { path } = useParams();

//   function changeBg(color) {
//     document.documentElement.style.setProperty("--hover-home-bg", color);
//   }

//   useEffect(() => {
//     setIsthisPlay(playlistIndex === props.trackData.trackKey[0]);
//   });

//   return (
//     <div className="overflow-y-scroll overflow-x-scroll bg-transparent relative mb-[95px] pb-4 text-white">
//       <div className="h-[340px] absolute left-0 right-0 -z-10 bg-gray"></div>
//       <div className="absolute left-0 right- top-[340px] h-[240px] -z-20 bg-red-500"></div>
//       <div className="fixed top-0 right-0 left-0 bottom- -z-30 bg-blue-500"></div>

//       <TheHeader />

//       {PLAYLIST.map((item) => {
//         if (item.link == path) {
//           return (
//             <div
//               key={item.title}
//               onLoad={() => {
//                 changeBg(item.playlistBg);
//                 setPlaylistIndex(PLAYLIST.indexOf(item));
//               }}
//             >
//               <PlaylistDetails data={item} />

//               <div className="flex items-center flex-row py-6 px-8 relative">
//                 <button
//                   className="border-none bg-transparent"
//                   onClick={() => props.changeTrack([PLAYLIST.indexOf(item), 0])}
//                 >
//                   <PlayButton isthisplay={isthisplay} />
//                 </button>
//                 <IconButton
//                   icon={<Icons.Like />}
//                   activeicon={<Icons.LikeActive />}
//                 />
//                 <Icons.More className="ml-6 text-2xl text-white opacity-60" />
//               </div>

//               <div className="mr-[20px] mb-4 ml-10 py-2 px-4 text-[#b3b3b3]border-b border-white grid gap-4 grid-cols-listHead">
//                 <p className="text-lg leading-4 m-0 tracking-wide">#</p>
//                 <p className="text-sm leading-4 m-0 tracking-wide">BAŞLIK</p>
//                 <Icons.Time />
//               </div>

//               <div className="md:py-0 md:px-8 py-0 px-4">
//                 {item.playlistData.map((song) => {
//                   return (
//                     <button
//                       key={song.index}
//                       onClick={() =>
//                         props.changeTrack([
//                           PLAYLIST.indexOf(item),
//                           item.playlistData.indexOf(song),
//                         ])
//                       }
//                       className="block w-full bg-none border border-transparent rounded-md"
//                     >
//                       <PlaylistTrack
//                         data={{
//                           listType: item.type,
//                           song: song,
//                         }}
//                       />
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         }
//       })}
//     </div>
//   );
// }

// export default ThePlaylist;
