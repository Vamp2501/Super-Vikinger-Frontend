import {
  ClickAwayListener,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SettingDropdown from "../SettingDropdown";
import "../../design/Mobile/Footer/footer.css";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const anchorRef = React.useRef(null);
  const anchorRefSetting = React.useRef(null);
  const [openSetting, setOpenSetting] = React.useState(false);

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
      <div className="footerHeader">
        <div className="iconHolderFooter">
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
          <div className="settingBtn" style={{ marginRight: 30 }}>
            <div>
              <Button
                className="dropdownButtonFooter"
                ref={anchorRefSetting}
                id="composition-button"
                aria-controls={openSetting ? "composition-menu" : undefined}
                aria-expanded={openSetting ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleSettingToggle}
              >
                <IconButton>
                  <SettingsOutlinedIcon
                    style={{
                      color: "#9aa4bf",
                    }}
                  />
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
                        mr: 1,
                        ml: 1,
                        mt: 0,
                        width: "-webkit-fill-availabel",
                        height: "70vh",
                        border: "none",
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
                              filter:
                                "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
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
                          sx={{
                            background: "#1d2333",
                            padding: 2,
                          }}
                        >
                          <MenuItem sx={{ p: 0 }} onClick={handleSettingClose}>
                            {
                              <SettingDropdown
                              // avatar={avatar}
                              // profileName={profileName}
                              // publicEmail={publicEmail}
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
      </div>
    </React.Fragment>
  );
};

export default Footer;
