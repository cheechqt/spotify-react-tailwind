import { HeartIcon } from "@heroicons/react/24/outline";

function PlayerLeft({trackData}) {
  
  return (
    <div className="flex items-center justify-start h-[56px]">
      <ImgBox imgSrc={trackData.trackImg} />
      <SongDetails trackData={trackData} />
      <HeartIcon className="h-5 w-5 text-[#BABABA] hover:text-white cursor-default"/>
    </div>
  );
}

function ImgBox({ imgSrc }) {
  return (
    <div className="w-[56px] h-[56px] p-0 m-0">
      <img src={imgSrc} className="w-full h-full" alt="Song" />
    </div>
  );
}

function SongDetails({ trackData }) {
  return (
    <div className="mx-4 text-white text-sm">
      <p>{trackData.trackName}</p>
      <p className="m-0">
        <small className="text-[#b3b3b3] text-[11px]">
          {trackData.trackArtist}
        </small>
      </p>
    </div>
  );
}

export default PlayerLeft;
