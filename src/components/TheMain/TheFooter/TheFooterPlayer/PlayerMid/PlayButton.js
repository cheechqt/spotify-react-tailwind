import React from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

function PlayButton(props) {
  return (
    <div
      className="w-8 h-8 rounded-3xl border-none bg-white p-0 transition-transform duration-200 hover:scale-110"
      tabIndex="0"
      role="button"
      onClick={() => props.changePlay(!props.isPlaying)}
    >
      {props.isPlaying && props.isthisplay ? <PlayIcon /> : <PauseIcon />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isPlaying: state.isPlaying,
  };
};

export default PlayButton;
