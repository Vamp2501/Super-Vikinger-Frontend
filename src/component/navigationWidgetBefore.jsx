import React from "react";
import Drawer from "@mui/material/Drawer";

import Divider from "@mui/material/Divider";

import MonitorIcon from "@mui/icons-material/Monitor";
import EqualizerRoundedIcon from "@mui/icons-material/EqualizerRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { makeStyles } from "@mui/styles";
import "../design/navigation-widget/navigationWidgetBefore.scss";
import { Image, Button } from "react-bootstrap";
import { IconButton } from "@mui/material";
const drawerWidth = 300;
const useStyles = makeStyles({
  drawerPaper: {
    marginTop: 80,
  },
});
const DrawerWidgetBefore = ({
  handleDrawerClose,
  theme,
  DrawerHeader,
  draweropen,
}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Drawer
        style={{
          backgroudColor: "#1D2333",
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        classes={{ paper: classes.drawerPaper }}
        variant="persistent"
        anchor="left"
        open={draweropen}
      >
        <DrawerHeader>
          <div className="drawerBackgroundBefore">
            <div className="beforeDrawerHeaderHolder">
              <div className="BeforeDrwaerHeader">
                <div className="icon1 hex" style={{ padding: 0 }}>
                  <div className="hex-background">
                    <Image className="icons" src="./Image/Avatar/17.jpg" />
                  </div>
                </div>
                <div className="beforeProfileHeaderText">
                  <p
                    style={{
                      fontSize: 18,
                      fontFamily: "RajdhaniBold",
                      color: "white",
                      margin: "auto 0px",
                    }}
                  >
                    WELCOME
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      color: "#9aa4bf",
                      fontFamily: "RajdhaniBold",
                      margin: "auto 0px",
                    }}
                  >
                    Please Register Or Login To Get Your Profile
                  </p>
                </div>
              </div>
              <Button className="drawerLoginBtn">Login & Register</Button>
            </div>

            <div className="widgets">
              <ul className="menu" style={{ marginTop: 46, paddingLeft: 0 }}>
                <p
                  style={{
                    textAlign: "left",
                    paddingLeft: 20,
                    color: "#9aa4bf",
                    fontSize: 16,
                    fontFamily: "RajdhaniBold",
                  }}
                >
                  Sections
                </p>
                <li className="menu-item" style={{ paddingLeft: 4 }}>
                  <a href="" className="menu-item-link">
                    <IconButton
                      className="menu-item-link-icon"
                      style={{
                        padding: 0,
                        color: "#616a82",
                      }}
                    >
                      <MonitorIcon />
                    </IconButton>
                    Newsfeed
                  </a>
                </li>
                <li className="menu-item" style={{ paddingLeft: 4 }}>
                  <a href="" className="menu-item-link">
                    <IconButton
                      className="menu-item-link-icon"
                      style={{
                        padding: 0,
                        color: "#616a82",
                      }}
                    >
                      <EqualizerRoundedIcon />
                    </IconButton>
                    Overview
                  </a>
                </li>
                <li className="menu-item" style={{ paddingLeft: 4 }}>
                  <a href="" className="menu-item-link">
                    <IconButton
                      className="menu-item-link-icon"
                      style={{
                        padding: 0,
                        color: "#616a82",
                      }}
                    >
                      <GroupsRoundedIcon />
                    </IconButton>
                    Groups
                  </a>
                </li>
                <li className="menu-item" style={{ paddingLeft: 4 }}>
                  <a href="" className="menu-item-link">
                    <IconButton
                      className="menu-item-link-icon"
                      style={{
                        padding: 0,
                        color: "#616a82",
                      }}
                    >
                      <PersonOutlinedIcon />
                    </IconButton>
                    Members
                  </a>
                </li>
                <li className="menu-item" style={{ paddingLeft: 4 }}>
                  <a href="" className="menu-item-link">
                    <IconButton
                      className="menu-item-link-icon"
                      style={{
                        padding: 0,
                        color: "#616a82",
                      }}
                    >
                      <WorkspacePremiumIcon />
                    </IconButton>
                    Badges
                  </a>
                </li>
                <li className="menu-item" style={{ paddingLeft: 4 }}>
                  <a href="" className="menu-item-link">
                    <IconButton
                      className="menu-item-link-icon"
                      style={{
                        padding: 0,
                        color: "#616a82",
                      }}
                    >
                      <StarOutlineRoundedIcon />
                    </IconButton>
                    Quests
                  </a>
                </li>
                <li className="menu-item" style={{ paddingLeft: 4 }}>
                  <a href="" className="menu-item-link">
                    <IconButton
                      className="menu-item-link-icon"
                      style={{
                        padding: 0,
                        color: "#616a82",
                      }}
                    >
                      <SmartDisplayOutlinedIcon />
                    </IconButton>
                    Streams
                  </a>
                </li>
                <li className="menu-item" style={{ paddingLeft: 4 }}>
                  <a href="" className="menu-item-link">
                    <IconButton
                      className="menu-item-link-icon"
                      style={{
                        padding: 0,
                        color: "#616a82",
                      }}
                    >
                      <DateRangeOutlinedIcon />
                    </IconButton>
                    Events
                  </a>
                </li>
                <li className="menu-item" style={{ paddingLeft: 4 }}>
                  <a href="" className="menu-item-link">
                    <IconButton
                      className="menu-item-link-icon"
                      style={{
                        padding: 0,
                        color: "#616a82",
                      }}
                    >
                      <ChatOutlinedIcon />
                    </IconButton>
                    Forums
                  </a>
                </li>
                <li className="menu-item" style={{ paddingLeft: 4 }}>
                  <a href="" className="menu-item-link">
                    <IconButton
                      className="menu-item-link-icon"
                      style={{
                        padding: 0,
                        color: "#616a82",
                      }}
                    >
                      <AddBusinessIcon />
                    </IconButton>
                    Marketplace
                  </a>
                </li>
              </ul>
              <ul
                className="menu"
                style={{ marginTop: 46, paddingBottom: 100, paddingLeft: 0 }}
              >
                <p
                  style={{
                    textAlign: "left",
                    paddingLeft: 20,
                    color: "#9aa4bf",
                    fontSize: 16,
                    fontFamily: "RajdhaniBold",
                  }}
                >
                  MAIN LINKS
                </p>
                <li className="menu-item" style={{ paddingLeft: 4 }}>
                  <a
                    href=""
                    className="menu-item-link"
                    style={{ paddingLeft: 20, margin: "5px auto" }}
                  >
                    Home
                  </a>
                </li>
                <li className="menu-item" style={{ paddingLeft: 4 }}>
                  <a
                    href=""
                    className="menu-item-link"
                    style={{ paddingLeft: 20, margin: "5px auto" }}
                  >
                    Careers
                  </a>
                </li>
                <li className="menu-item" style={{ paddingLeft: 4 }}>
                  <a
                    href=""
                    className="menu-item-link"
                    style={{ paddingLeft: 20, margin: "5px auto" }}
                  >
                    Faqs
                  </a>
                </li>
                <li className="menu-item" style={{ paddingLeft: 4 }}>
                  <a
                    href=""
                    className="menu-item-link"
                    style={{ paddingLeft: 20, margin: "5px auto" }}
                  >
                    About Us
                  </a>
                </li>
                <li className="menu-item" style={{ paddingLeft: 4 }}>
                  <a
                    href=""
                    className="menu-item-link"
                    style={{ paddingLeft: 20, margin: "5px auto" }}
                  >
                    Our Blog
                  </a>
                </li>
                <li className="menu-item" style={{ paddingLeft: 4 }}>
                  <a
                    href=""
                    className="menu-item-link"
                    style={{ paddingLeft: 20, margin: "5px auto" }}
                  >
                    Contact Us
                  </a>
                </li>
                <li className="menu-item" style={{ paddingLeft: 4 }}>
                  <a
                    href=""
                    className="menu-item-link"
                    style={{ paddingLeft: 20, margin: "5px auto" }}
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </DrawerHeader>
      </Drawer>
    </React.Fragment>
  );
};

export default DrawerWidgetBefore;
