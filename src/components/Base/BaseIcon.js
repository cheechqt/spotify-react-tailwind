function Icon({ value, svgClass, pauseClass }) {
  switch (value) {
    case "loop":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className={`h-5 w-5 fill-[#BABABA] hover:fill-[#fff]`}
        >
          <path d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z" />
        </svg>
      );
    case "mix":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className={`h-5 w-5 fill-[#BABABA] hover:fill-[#fff]`}
        >
          <path d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z" />
        </svg>
      );
    case "next":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className={`h-5 w-5 fill-[#BABABA] hover:fill-[#fff]`}
        >
          <path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z" />
        </svg>
      );
    case "pause":
      return (
        <svg
          height=".5em"
          viewBox="-45 0 327 327"
          width=".5em"
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 ${pauseClass}`}
        >
          <path d="m158 0h71c4.417969 0 8 3.582031 8 8v311c0 4.417969-3.582031 8-8 8h-71c-4.417969 0-8-3.582031-8-8v-311c0-4.417969 3.582031-8 8-8zm0 0" />
          <path d="m8 0h71c4.417969 0 8 3.582031 8 8v311c0 4.417969-3.582031 8-8 8h-71c-4.417969 0-8-3.582031-8-8v-311c0-4.417969 3.582031-8 8-8zm0 0" />
        </svg>
      );
    case "play":
      return (
        <svg
          height=".7em"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${svgClass}`}
        >
          <path d="M4.018 14L14.41 8 4.018 2z" />
        </svg>
      );
    case "prev":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          width="1em"
          viewBox="0 0 16 16"
          className={`h-5 w-5 fill-[#BABABA] hover:fill-[#fff]`}
        >
          <path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z" />
        </svg>
      );
    default:
      return;
  }
}

export default Icon;
