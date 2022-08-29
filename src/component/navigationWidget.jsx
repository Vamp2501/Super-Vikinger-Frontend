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
import "../design/navigation-widget/navigationWidget.scss";
import { Image } from "react-bootstrap";
import { IconButton } from "@mui/material";
import "../design/user-avatar/_user-avatar.scss";
const drawerWidth = 300;
const useStyles = makeStyles({
  drawerPaper: {
    marginTop: 80,
  },
});
const DrawerWidget = ({
  handleDrawerClose,
  theme,
  DrawerHeader,
  draweropen,
  avatar,
  fullName,
  coverImage,
  email,
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
          <div
            className="drawerBackground"
            style={{
              backgroundImage: `url(${coverImage})`,
              textAlign: "center",
            }}
          >
            <Image
              src={avatar}
              style={{ width: 120, height: 131, zIndex: 1, marginTop: 23 }}
              alt="Please Set Your Profile Image!"
            />
            {/* <div
              className="user-shortdescription-avatar user-avatar medium "
              style={{ margin: "23px auto" }}
            >
              <div className="user-avatar-border">
                <div
                  className="hexagon-120-132"
                  id="avatarImageWidget"
                  style={{
                    width: 120,
                    height: 132,
                    fill: true,
                    borderColor: "#1d2333",
                    position: "relative",
                  }}
                >
                  <canvas
                    height={132}
                    width={120}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                  />
                </div>
              </div>
              <div className="user-avatar-content">
                <div
                  className="hexagon-image-82-90"
                  style={{
                    backgroundImage: `url(${avatar})`,
                    width: 82,
                    height: 90,
                    position: "relative",
                    borderRadius: 3,
                    clip: true,
                  }}
                >
                  <canvas
                    width={82}
                    height={90}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <div className="user-avatar-progress">
                <div
                  className="hexagon-progress-100-110"
                  style={{
                    width: 100,
                    height: 110,
                    position: "relative",
                    scale: "0 1",
                  }}
                >
                  <canvas
                    width={100}
                    height={110}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <div className="user-avatar-progress-border">
                <div className="hexagon-border-100-110">
                  <canvas
                    width={100}
                    height={110}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <div className="user-avatar-badge">
                <div className="user-avatar-badge-border">
                  <div
                    className="hexagon-32-36"
                    style={{ width: 32, height: 36, position: "relative" }}
                  >
                    {" "}
                    <canvas
                      width={32}
                      height={36}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
                <div className="user-avatar-badge-content">
                  <div
                    className="hexagon-dark-26-28"
                    style={{ width: 26, height: 28, position: "relative" }}
                  >
                    <canvas
                      width={26}
                      height={28}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
                <p className="user-avatar-badge-text">24</p>
              </div>
            </div> */}
            <p style={{ fontSize: 18 }}>{fullName}</p>
            <p
              className="playerLink"
              style={{ fontSize: 11, color: "#9aa4bf" }}
            >
              {email}
            </p>
            <div className="badgeHolder" style={{ margin: "36px auto 44px" }}>
              <Image src="./Image/Badge/gold-s.png" />
              <Image src="./Image/Badge/age-s.png" />
              <Image src="./Image/Badge/caffeinated-s.png" />
              <Image src="./Image/Badge/warrior-s.png" />
              <Image src="./Image/Badge/blank-s.png" />
            </div>
            <div className="profileInfo">
              <div className="infoOne">
                930 <br />
                <span style={{ fontSize: 12, color: "#9AA4BF" }}>POSTS</span>
              </div>{" "}
              <Divider
                orientation="vertical"
                flexItem
                sx={{ bgcolor: "white", height: 20, margin: "auto 0px" }}
              />
              <div className="infoTwo">
                82 <br />
                <span style={{ fontSize: 12, color: "#9AA4BF" }}>FRIENDS</span>
              </div>{" "}
              <Divider
                orientation="vertical"
                flexItem
                sx={{ bgcolor: "white", height: 20, margin: "auto 0px" }}
              />
              <div className="infoThree">
                5.7K <br />
                <span style={{ fontSize: 12, color: "#9AA4BF" }}>VISTIS</span>
              </div>
            </div>
            <div className="widgets">
              <ul
                className="menu"
                style={{ marginTop: 46, paddingBottom: 100, paddingLeft: 20 }}
              >
                <li className="menu-item">
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
                <li className="menu-item">
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
                <li className="menu-item">
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
                <li className="menu-item">
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
                <li className="menu-item">
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
                <li className="menu-item">
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
                <li className="menu-item">
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
                <li className="menu-item">
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
                <li className="menu-item">
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
                <li className="menu-item">
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
            </div>
          </div>
        </DrawerHeader>
      </Drawer>
    </React.Fragment>
  );
};

export default DrawerWidget;
