import { HeartIcon } from "@heroicons/react/24/outline";

function PlayerLeft({trackData}) {
  
  return (
    <div className="flex items-center justify-start h-[56px]">
      <ImgBox imgSrc={trackData.trackImg} />
      <SongDetails trackData={trackData} />
      <HeartIcon className="md:h-5 md:w-5 h-0 w-0 text-[#BABABA] hover:text-white cursor-default"/>
    </div>
  );
}

function ImgBox({ imgSrc }) {
  return (
    <div className="w-[56px] h-[56px] p-0 m-0">
      <img
        src={imgSrc}
        className="w-full h-full min-w-[56px] min-h-h-[56px]"
        alt="Song"
      />
    </div>
  );
}

function SongDetails({ trackData }) {
  return (
    <div className="mx-4 text-white text-sm">
      <p>{trackData.trackName}</p>
      <p className="m-0">
        <small className="md:text-[#b3b3b3] md:text-[11px] hidden md:inline">
          {trackData.trackArtist}
        </small>
      </p>
    </div>
  );
}

export default PlayerLeft;
