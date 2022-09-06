import TheHeader from "./containers/TheHeader";
import TheMain from "./containers/TheMain";
import TheRegistration from "./containers/TheRegistration";
import TheSidebar from "./containers/TheSidebar";
import TheSidebarOverlay from "./components/TheSidebar/TheSidebarOverlay";

function App() {
  return (
    <>
      <div className="flex flex-grow overflow-auto">
        <TheSidebar />
        <TheSidebarOverlay />
        <div className="flex-1 overflow-auto">
          <TheHeader />
          <TheMain />
        </div>
      </div>
      <TheRegistration />
    </>
  );
}

export default App;
