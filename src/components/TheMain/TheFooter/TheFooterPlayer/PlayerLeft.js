import {
  HeartIcon,
} from "@heroicons/react/24/outline";

function PlayerLeft(trackData) {
  return (
    <div className="flex items-center justify-center">
      <ImgBox trackData={trackData} />
      <SongDetails trackData={trackData} />
      <HeartIcon className="h-5 w-5" />
    </div>
  );
}

function ImgBox({ trackData }) {
  return (
    <div className="w-[56px] h-[56px]">
      <img className="w-full h-full" src={trackData.trackImg} alt="Gavurlar" />
    </div>
  );
}

function SongDetails({ trackData }) {
  return (
    <div className="mx-4">
      <p>{trackData.trackName}</p>
      <p className="m-0">
        <small className="text-[#b3b3b3] text-[11px]">
          {trackData.trackArtist}
        </small>
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    trackData: state.trackData,
  };
};

export default PlayerLeft;
