import TheFooterPlayerRight from "./TheFooterPlayerRight";
import TheFooterPlayerLeft from "./TheFooterPlayerLeft";

function TheFooterPlayer() {
  return (
    <footer className="py-4 px-8 justify-between items-center flex flex-wrap gap-y-2 gap-x-6">
      <div className="">
        <TheFooterPlayerLeft/>
        <TheFooterPlayerRight />
      </div>
    </footer>
  );
}

export default TheFooterPlayer;
