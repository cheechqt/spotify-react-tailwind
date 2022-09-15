import { Route, Routes } from "react-router-dom";

import TheMain from "../containers/TheMain";
import TheSignUp from "./TheSignUp";
import TheLogin from "./TheLogin";
import TheSearch from "components/TheMain/TheSearch/TheSearch";
import TheLibrary from "components/TheMain/TheLibrary/TheLibrary";

function App() {
  return (
    <>
      <Routes>
        <Route key="1" path="/" element={<TheMain />} />
        <Route path="/signup" element={<TheSignUp />} />
        <Route path="/login" element={<TheLogin />} />
        <Route path="/search" element={<TheSearch />} />
        <Route path="/library" element={<TheLibrary />} />
      </Routes>
    </>
  );
}

export default App;
