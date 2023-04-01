import React, { useState, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "/sass/pages/home.scss";

import NavBar from "./NavBar";
import Aside from "./Aside";
import Footer from "./Footer";
import Loader from "./Fallback-UI/Loader";

const Scores = React.lazy(() => import("./Scores"));
const OtherSports = React.lazy(() => import("./OtherSports"));

function Livescore() {
  const [showAside, setShowAside] = useState(false);

  const handleShowAside = () => {
    setShowAside(!showAside);
  };

  return (
    <div className="outer-wrapper">
      <div className="wrapper">
        <NavBar showAside={showAside} handleShowAside={handleShowAside} />
        <Aside showAside={showAside} handleShowAside={handleShowAside} />
        <main>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Navigate to="/scores/football" />} />
              <Route path="/scores/*" element={<Scores />} />

              <Route path="/favorite" element={<OtherSports title="Favorite" />} />
              <Route path="/news" element={<OtherSports title="News" />} />
              <Route path="/get-the-app" element={<OtherSports title="Get the app" />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Livescore;
