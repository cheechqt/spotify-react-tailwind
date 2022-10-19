const PlaylistCover = ({ url }) => {
  return (
    <img
      className="rounded shadow-lg"
      src={url}
      alt="playlist cover"
    />
  );
};

export default PlaylistCover;
