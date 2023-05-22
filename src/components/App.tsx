import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./UI/Organisms/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Networks from "./Pages/Networks/Networks";
import Contact from "./Pages/Contact/Contact";
import ListRepository from "./Pages/Repository/ListRepository";
import Skills from "./Pages/Skills/Skills";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index path="/home" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/repository" element={<ListRepository />} />
          <Route path="/networks" element={<Networks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
