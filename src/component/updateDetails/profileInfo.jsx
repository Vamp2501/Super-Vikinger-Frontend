import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "../../design/updateProfile/profileInfo.css";
import {
  Collapse,
  Container,
  IconButton,
  ListItemButton,
  Toolbar,
} from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "react-bootstrap";
import ProfileDetails from "./profileDetails";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, Outlet } from "react-router-dom";

const drawerWidth = 270;
const ProfileInfo = ({ handleProfileInfo }) => {
  const CustomExpandIcon = () => {
    return (
      <Box
        sx={{
          ".Mui-expanded & > .collapsIconWrapper": {
            display: "none",
          },
          ".expandIconWrapper": {
            display: "none",
          },
          ".Mui-expanded & > .expandIconWrapper": {
            display: "block",
          },
        }}
      >
        <div className="expandIconWrapper">
          {" "}
          <RemoveIcon style={{ color: "#fff" }} />
        </div>
        <div className="collapsIconWrapper">
          {" "}
          <AddIcon style={{ color: "#fff" }} />
        </div>
      </Box>
    );
  };
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    if (!open || open) {
      setOpen(!open);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="pageContainer">
      <div className="sideNav">
        <div className="accordionHolder">
          {/* ------------------My-Profile----------------------------- */}
          <Accordion sx={{ backgroundColor: "#1d2333" }}>
            <AccordionSummary
              expandIcon={<CustomExpandIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <div className="AboutProfile" onClick={handleClick}>
                  <IconButton style={{ color: "#4ff461", paddingTop: 0 }}>
                    <AccountCircleOutlinedIcon />
                  </IconButton>
                  <div className="profileHeader">
                    <p
                      style={{
                        paddingTop: 20,
                        margin: 0,
                        color: "#fff",

                        fontSize: 16,
                      }}
                    >
                      My Profile
                    </p>
                    <p style={{ color: "#616a82", fontSize: 12, margin: 0 }}>
                      Change your avatar & cover,accept friends,read message and
                      more!
                    </p>
                  </div>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="profileactionsHolder">
                <p
                  onClick={() => {
                    navigate("/updateInfo/profileInfo");
                  }}
                >
                  Profile-Info
                </p>
                <p>social & Stream</p>
                <p>Notifications</p>
                <p>Messages</p>
                <p>Friend Requests</p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Divider sx={{ backgroundColor: "#616a82" }} />

          {/* -----------------Account--------------------------------- */}
          <Accordion sx={{ backgroundColor: "#1d2333" }}>
            <AccordionSummary
              expandIcon={<CustomExpandIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <div className="AboutProfile" onClick={handleClick}>
                  <IconButton style={{ color: "#4ff461", paddingTop: 0 }}>
                    <GroupsOutlinedIcon />
                  </IconButton>
                  <div className="profileHeader">
                    <p
                      style={{
                        paddingTop: 20,
                        margin: 0,
                        color: "#fff",
                        fontSize: 16,
                      }}
                    >
                      Accounts
                    </p>
                    <p style={{ color: "#616a82", fontSize: 12, margin: 0 }}>
                      Change settings,configure notifications,and review your
                      privacy
                    </p>
                  </div>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="profileactionsHolder">
                <p
                  onClick={() => {
                    navigate("/updateInfo/accountInfo");
                  }}
                >
                  Account-Info
                </p>
                <p
                  onClick={() => {
                    navigate("/updateInfo/changePassword");
                  }}
                >
                  Change Password
                </p>
                <p>Genral Settings</p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Divider sx={{ backgroundColor: "#616a82" }} />

          {/* ------------------My-Groups----------------------------- */}
          <Accordion sx={{ backgroundColor: "#1d2333" }}>
            <AccordionSummary
              expandIcon={<CustomExpandIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <div className="AboutProfile" onClick={handleClick}>
                  <IconButton style={{ color: "#4ff461", paddingTop: 0 }}>
                    <AccountCircleOutlinedIcon />
                  </IconButton>
                  <div className="profileHeader">
                    <p
                      style={{
                        paddingTop: 20,
                        margin: 0,
                        color: "#fff",

                        fontSize: 16,
                      }}
                    >
                      Groups
                    </p>
                    <p style={{ color: "#616a82", fontSize: 12, margin: 0 }}>
                      Create gropups,manage the ones you created or accept
                      invites!
                    </p>
                  </div>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="profileactionsHolder">
                <p>Profile-Info</p>
                <p>social & Stream</p>
                <p>Notifications</p>
                <p>Messages</p>
                <p>Friend Requests</p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Divider sx={{ backgroundColor: "#616a82" }} />

          {/* ------------------My-Store----------------------------- */}

          <Accordion sx={{ backgroundColor: "#1d2333" }}>
            <AccordionSummary
              expandIcon={<CustomExpandIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <div className="AboutProfile" onClick={handleClick}>
                  <IconButton style={{ color: "#4ff461", paddingTop: 0 }}>
                    <AccountCircleOutlinedIcon />
                  </IconButton>
                  <div className="profileHeader">
                    <p
                      style={{
                        paddingTop: 20,
                        margin: 0,
                        color: "#fff",

                        fontSize: 16,
                      }}
                    >
                      My Store
                    </p>
                    <p style={{ color: "#616a82", fontSize: 12, margin: 0 }}>
                      Review your account,manage products check states and much
                      // more!
                    </p>
                  </div>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="profileactionsHolder">
                <p>Profile-Info</p>
                <p>social & Stream</p>
                <p>Notifications</p>
                <p>Messages</p>
                <p>Friend Requests</p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Divider sx={{ backgroundColor: "#616a82" }} />
        </div>
        {/* -----------------Buttons------------------- */}
        <div className="btnholder">
          <Button
            className="saveBtn"
            onClick={() => {
              handleProfileInfo();
              navigate("/homePage");
            }}
          >
            Save Changes
          </Button>
          <Button className="discardBtn">Discard All</Button>
        </div>
      </div>
      <div className="contentShower">
        <Outlet />
        {/* <ProfileDetails /> */}
      </div>
    </div>
  );
};

export default ProfileInfo;
