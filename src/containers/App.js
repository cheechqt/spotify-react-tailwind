import { Route, Routes } from "react-router-dom";

import TheMain from "../containers/TheMain";
import TheSignUp from "./TheSignUp";
import TheLogin from "./TheLogin";
import TheSearch from "containers/TheSearch";
import TheLibrary from "containers/TheLibrary";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TheMain />} />
      <Route path="/signup" element={<TheSignUp />} />
      <Route path="/login" element={<TheLogin />} />
      <Route path="/search" element={<TheSearch />} />
      <Route path="/library" element={<TheLibrary />} />
    </Routes>
  );
}

export default App;
