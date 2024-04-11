import React, { useState, useEffect } from "react";
import Hero from "./pages/home/Hero/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./common/Nav/Nav.jsx";
import Contact from "./pages/Contact/Contact";
import Team from "./pages/Team/Team.jsx";
import Event from "./pages/Event/Event";
import About from "./pages/About/About.jsx";
import Notfound from "./common/Notfound/Notfound.jsx";
import Foot from "./common/Foot/Foot.jsx";
import Loader from "./common/Loader/Loader.jsx";
import Query from "../components/pages/Contest/Query.jsx";
import AdminForm from "../components/pages/Admin/Form";
import Addcerti from "../components/pages/Admin/Addcerti";
// import Contest from '../components/pages/Contest/Contest.jsx'
import CertificateVerifier from "./assets/Certificate/Certify.jsx";
import ScrollToTop from "./common/Scroll/Scroll.jsx";

import ContestList from "./pages/Contest/Clist.jsx";
function Main() {
  const [showLoader, setShowLoader] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 4500);

    return () => clearTimeout(timeout);
  }, []);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <div className={darkMode ? "dark-theme" : "light-theme"}>
        <div>
          {showLoader && <Loader />}

          <div>
            <Nav />
            <ScrollToTop/>
            <Routes>
              <Route exact path="/" element={<Hero />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/team" element={<Team />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/event" element={<Event />} />
              <Route exact path="/contest" element={<ContestList />} />
              <Route exact path="/query" element={<Query />} />
              <Route exact path="/admin" element={<AdminForm />} />
              <Route exact path="/admin/addcerti" element={<Addcerti />} />
              <Route exact path="/verify" element={<CertificateVerifier />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
            <Foot />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
