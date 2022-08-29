import React from "react";
import {
  Image,
  Button,
  Form,
  ProgressBar,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

import Icon from "awesome-react-icons";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DrawerWidget from "../component/navigationWidget";
import "../design/component/navbar/navbarAfter.css";
import { Outlet, useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import {
  Divider,
  LinearProgress,
  IconButton,
  MenuItem,
  MenuList,
  Popper,
  Grow,
  ClickAwayListener,
  Paper,
} from "@mui/material";
import SettingDropdown from "./SettingDropdown";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const NavbarAfter = ({
  fullName,
  email,
  avatar,
  coverImage,
  profileName,
  publicEmail,
  power,
}) => {
  const navigate = useNavigate();
  const [draweropen, setDrawerOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const anchorRefSetting = React.useRef(null);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openSetting, setOpenSetting] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  // ---------------------for setting----------------------------
  const handleSettingToggle = () => {
    setOpenSetting((prevOpen) => !prevOpen);
  };

  const handleSettingClose = (event) => {
    if (
      anchorRefSetting.current &&
      anchorRefSetting.current.contains(event.target)
    ) {
      return;
    }

    setOpenSetting(false);
  };

  function handleSettingListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenSetting(false);
    } else if (event.key === "Escape") {
      setOpenSetting(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpenSetting = React.useRef(openSetting);
  React.useEffect(() => {
    if (prevOpenSetting.current === true && openSetting === false) {
      anchorRefSetting.current.focus();
    }

    prevOpenSetting.current = openSetting;
  }, [openSetting]);

  return (
    <React.Fragment>
      <div className="navbarAfter">
        <div className="navbarLogo" style={{ marginLeft: 0 }}>
          <Image src="./Image/logo/vikinger-logo.png" fluid />
        </div>
        <div className="navbarMenu">
          <IconButton
            className="widgetsIcon"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2 }}
            style={{ color: "#9aa4bf" }}
          >
            <WidgetsOutlinedIcon />
          </IconButton>
        </div>
        <div className="navbarMenuItem">
          <ul>
            <li>Home</li>
            <li>Careers</li>
            <li>Faqs</li>
            <li>
              {" "}
              <div>
                <Button
                  className="dropdownButtonNavbar"
                  ref={anchorRef}
                  id="composition-button"
                  aria-controls={open ? "composition-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                >
                  ...
                </Button>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement="bottom-start"
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom-start"
                            ? "center top"
                            : "left bottom",
                        borderRadius: 9,
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem onClick={handleClose}>About Us</MenuItem>
                            <MenuItem onClick={handleClose}>Our Blog</MenuItem>
                            <MenuItem onClick={handleClose}>
                              Contact Us
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              Privacy Policy
                            </MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            </li>
          </ul>
        </div>
        <div className="navbarSearchBar">
          <form autoComplete="off" id="searchBar">
            <input
              type="search"
              placeholder="Search heros for people and groups"
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="progrssBarHolder">
          <div className="ProgressBarText">
            <p
              style={{
                marginBottom: 5,
                fontFamily: "RajdhaniBold",
                fontSize: 12,
              }}
            >
              NEXT:
            </p>
            <p
              style={{
                marginBottom: 5,
                fontFamily: "RajdhaniBold",
                fontSize: 12,
              }}
            >
              {power}:EXP
            </p>
          </div>
          <div className="progressBarStripe">
            <LinearProgress variant="determinate" value={power} />
          </div>
        </div>
        <Divider
          className="dividerNavabarAfter"
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            height: 40,
            backgroundColor: "white",
            margin: "auto 0px",
          }}
        />
        <div className="tabBarHolder">
          <IconButton
            aria-label="delete"
            className="tabIcons"
            style={{ color: "#9aa4bf" }}
          >
            <ShoppingBagOutlinedIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            className="tabIcons"
            style={{ color: "#9aa4bf" }}
          >
            <SentimentSatisfiedAltOutlinedIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            className="tabIcons"
            style={{ color: "#9aa4bf" }}
          >
            <ChatOutlinedIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            className="tabIcons"
            style={{ color: "#9aa4bf" }}
          >
            <NotificationsOutlinedIcon />
          </IconButton>
        </div>
        <Divider
          className="dividerNavabarAfter"
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            height: 40,
            backgroundColor: "white",
            margin: "auto 0px",
          }}
        />
        <div className="setting" style={{ marginRight: 30 }}>
          <div>
            <Button
              className="dropdownButtonNavbar"
              ref={anchorRefSetting}
              id="composition-button"
              aria-controls={openSetting ? "composition-menu" : undefined}
              aria-expanded={openSetting ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleSettingToggle}
            >
              <IconButton>
                <SettingsOutlinedIcon style={{ color: "white" }} />
              </IconButton>
            </Button>
            <Popper
              open={openSetting}
              anchorEl={anchorRefSetting.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start"
                        ? "center top"
                        : "left bottom",
                    borderRadius: 8,
                  }}
                >
                  <Paper
                    sx={{
                      mr: 3,
                      mt: 0,
                      width: 220,
                      height: "90vh",
                      borderRadius: "8px !important",
                      overflow: "scroll",
                    }}
                  >
                    <ClickAwayListener onClickAway={handleSettingClose}>
                      <MenuList
                        autoFocusItem={openSetting}
                        id="composition-menu1"
                        aria-labelledby="composition-button"
                        onKeyDown={handleSettingListKeyDown}
                        PaperProps={{
                          elevation: 0,
                          sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            "& .MuiAvatar-root": {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                            },
                            "&:before": {
                              content: '""',
                              display: "block",
                              position: "absolute",
                              top: 0,
                              right: 14,
                              width: 10,
                              height: 10,
                              bgcolor: "background.paper",
                              borderRadius: 8,
                              transform: "translateY(-50%) rotate(45deg)",
                              zIndex: 0,
                            },
                          },
                        }}
                        transformOrigin={{
                          horizontal: "right",
                          vertical: "top",
                        }}
                        anchorOrigin={{
                          horizontal: "right",
                          vertical: "bottom",
                        }}
                      >
                        <MenuItem sx={{ p: 0 }} onClick={handleSettingClose}>
                          {
                            <SettingDropdown
                              avatar={avatar}
                              profileName={profileName}
                              publicEmail={publicEmail}
                              power={power}
                            />
                          }
                        </MenuItem>
                        <Button
                          className="logoutBtn"
                          onClick={() => {
                            localStorage.removeItem("Token");
                            navigate("/");
                          }}
                        >
                          Logout
                        </Button>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </div>
      </div>
      <Outlet />
      <DrawerWidget
        DrawerHeader={DrawerHeader}
        draweropen={draweropen}
        theme={theme}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        fullName={fullName}
        email={email}
        avatar={avatar}
        coverImage={coverImage}
      />
    </React.Fragment>
  );
};

export default NavbarAfter;
