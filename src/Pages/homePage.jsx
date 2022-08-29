import { Navigation } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import HomePageMainCard from "../component/homePageCard";
import LeftPanel from "../component/leftPanel";
import Footer from "../component/Mobile/Footer";

import RightPanel from "../component/rightPanel";

const HomePage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  function handleResize() {
    setWidth(window.innerWidth);
  }

  return (
    <React.Fragment>
      {width > 850 ? (
        <div
          className="bodyContainer"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            background: "#161B28",
          }}
        >
          <LeftPanel />

          <HomePageMainCard />
          <RightPanel />
        </div>
      ) : (
        <div
          className="bodyContainerMobile"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "#161B28",
          }}
        >
          <div className="cardContainer">
            <HomePageMainCard />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default HomePage;
