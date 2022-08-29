import React from "react";
import { Image } from "react-bootstrap";
import MonitorIcon from "@mui/icons-material/Monitor";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import IconButton from "@mui/material/IconButton";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import BarChartIcon from "@mui/icons-material/BarChart";
import "../design/user-avatar/main.scss";
import "../design/component/panel/leftPanel.css";

const LeftPanel = () => {
  return (
    <React.Fragment>
      <div className="leftPanelHolder" style={{ display: "flex" }}>
        <div className="leftPanel">
          {/* <div className="icon1 hex" style={{ padding: 0 }}>
            <div className="hex-background">
              <Image className="icons" src="./Image/Avatar/17.jpg" />
            </div>
          </div> */}
          <div className="icon1" style={{ padding: 0 }}>
            <div className="user-avatar small no-outline online">
              <div className="user-avatar-content">
                <div
                  className="hexagon-image-30-32"
                  id="imageProfile"
                  style={{ width: 30, height: 32, position: "relative" }}
                >
                  <canvas
                    height={32}
                    width={30}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                  />
                </div>
              </div>
              <div className="user-avatar-progress">
                <div className="hexagon-progress-40-44">
                  <canvas
                    width={40}
                    height={44}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <div className="user-avatar-progress-border">
                <div
                  className="hexagon-border-40-44"
                  style={{ width: 40, height: 44, position: "relative" }}
                >
                  <canvas
                    width={40}
                    height={44}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
              </div>
              <div className="user-avatar-badge">
                <div className="user-avatar-badge-border">
                  <div
                    className="hexagon-22-24"
                    style={{ width: 22, height: 24, position: "relative" }}
                  >
                    {" "}
                    <canvas
                      width={22}
                      height={24}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
                <div className="user-avatar-badge-content">
                  <div
                    className="hexagon-dark-16-18"
                    style={{ width: 16, height: 18, position: "relative" }}
                  >
                    <canvas
                      width={16}
                      height={18}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
                <p className="user-avatar-badge-text">24</p>
              </div>
            </div>
          </div>
          <div className="icon2" style={{ padding: "5px", zIndex: 1 }}>
            <IconButton
              className="iconHolder"
              sx={{ color: "#616A80", padding: "5px", zIndex: 1 }}
              aria-label="Monitor"
              title="NewsFeed"
            >
              <MonitorIcon />
            </IconButton>
          </div>
          <div className="icon3" style={{ padding: "5px", zIndex: 1 }}>
            <IconButton
              className="iconHolder"
              aria-label="Overview"
              title="OverView"
              sx={{ color: "#616A80", padding: "5px", zIndex: 1 }}
            >
              <BarChartIcon />
            </IconButton>
          </div>
          <div className="icon4" style={{ padding: "5px", zIndex: 1 }}>
            <IconButton
              className="iconHolder"
              title="Groups"
              sx={{ color: "#616A80", padding: "5px", zIndex: 1 }}
              aria-label="Groups"
            >
              <GroupsOutlinedIcon />
            </IconButton>
          </div>
          <div className="icon5" style={{ padding: "5px", zIndex: 1 }}>
            <IconButton
              className="iconHolder"
              title="Members"
              sx={{ color: "#616A80", padding: "5px", zIndex: 1 }}
              aria-label="Members"
            >
              <PersonOutlineOutlinedIcon />
            </IconButton>
          </div>
          <div className="icon6" style={{ padding: "5px", zIndex: 1 }}>
            <IconButton
              className="iconHolder"
              title="Badges"
              sx={{ color: "#616A80", padding: "5px", zIndex: 1 }}
              aria-label="Badges"
            >
              <WorkspacePremiumIcon />
            </IconButton>
          </div>
          <div className="icon7" style={{ padding: "5px", zIndex: 1 }}>
            <IconButton
              className="iconHolder"
              title="Quests"
              sx={{ color: "#616A80", padding: "5px", zIndex: 1 }}
              aria-label="Quests"
            >
              <StarOutlineIcon />
            </IconButton>
          </div>
          <div className="icon8" style={{ padding: "5px", zIndex: 1 }}>
            {" "}
            <IconButton
              className="iconHolder"
              title="Live-Tv"
              sx={{ color: "#616A80", padding: "5px", zIndex: 1 }}
              aria-label="Live-Tv"
            >
              <LiveTvIcon />
            </IconButton>
          </div>
          <div className="icon9" style={{ padding: "5px", zIndex: 1 }}>
            {" "}
            <IconButton
              title="Reminder"
              className="iconHolder"
              sx={{ color: "#616A80", padding: "5px", zIndex: 1 }}
              aria-label="Reminder"
            >
              <EventNoteIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LeftPanel;
