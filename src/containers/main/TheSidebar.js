import Footer from "components/TheSidebar/Footer/Footer";
import TheNav from "components/TheSidebar/TheNav/TheNav";
import Overlay from "components/TheSidebar/Overlay";
import BaseLogo from "components/Base/BaseLogo";

function TheSidebar({ showPopover, currentPath }) {
  if (currentPath === "/login" || currentPath === "/signup") return "";

  return (
    <>
      <aside
        id="sidebar"
        className="overflow-hidden top-0 bg-[#070707] w-[256px] text-[#b2b2b2] flex lg:sticky fixed flex-col z-[100] h-screen lg:h-auto -translate-x-full lg:translate-x-0 target:translate-x-0 transition-transform peer"
      >
        <BaseLogo />
        <TheNav showPopover={showPopover} />
        <Footer />
      </aside>
      <Overlay />
    </>
  );
}

export default TheSidebar;
