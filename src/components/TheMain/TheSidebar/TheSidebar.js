import TheFooter from "./TheFooter/TheFooter";
import TheLogo from "components/TheMain/TheSidebar/TheLogo";
import TheNav from "components/TheMain/TheSidebar/TheNav/TheNav";
import TheSidebarOverlay from "components/TheMain/TheSidebar/TheSidebarOverlay";

function TheSidebar({ showPopover }) {
  return (
    <>
      <aside
        id="sidebar"
        className="overflow-hidden top-0 bg-black w-[256px] text-[#b2b2b2] flex lg:sticky fixed flex-col z-30 h-screen lg:h-auto -translate-x-full lg:translate-x-0 target:translate-x-0 transition-transform peer"
      >
        <TheLogo />
        <TheNav showPopover={showPopover} />
        <TheFooter />
      </aside>
      <TheSidebarOverlay />
    </>
  );
}

export default TheSidebar;
