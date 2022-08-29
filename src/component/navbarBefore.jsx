import React, { useEffect, useState } from "react";
import { Image, Button, Form } from "react-bootstrap";
import Icon from "awesome-react-icons";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import DrawerWidgetBefore from "./navigationWidgetBefore";
import "../design/component/navbar/navbarBefore.css";

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
import { styled, useTheme } from "@mui/material/styles";

import { Outlet, useNavigate } from "react-router-dom";
import DrawerWidget from "./navigationWidget";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const NavbarBefore = () => {
  const [draweropen, setDrawerOpen] = React.useState(false);

  const theme = useTheme();

  const handleDrawerOpen = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [signInError, setSignInError] = useState(false);
  const handleLoginData = () => {
    if (email && pwd) {
      const loginData = {
        email: email,
        password: pwd,
      };
      axios({
        method: "post",
        url: "http://localhost:8080/user/login",
        data: loginData,
      })
        .then(function (response) {
          //handle success
          if (response.status === 200) {
            toast.success("success!");
          }
          console.log(response);
          localStorage.setItem("Token", JSON.stringify(response.data.token));
          setEmail("");
          setPwd("");
        })
        .catch((err) => {
          console.log("err : ", err.response.data);
          toast.error(err.response.data.message);
          setSignInError(true);
        });
    }
  };
  useEffect(() => {
    console.log("signInError-------------->", signInError);
  }, [signInError]);
  return (
    <React.Fragment>
      <div className="navbarBefore">
        <div className="navbarLogo" style={{ marginLeft: 20 }}>
          <Image
            src="./Image/logo/vikinger-logo.png"
            style={{ width: 80, height: 80 }}
            fluid
          />
        </div>
        <div className="navbarMenu">
          <Icon
            name="burger"
            style={{ color: "lightGray" }}
            className="w-6 h-6 hamburgerIcon"
            onClick={handleDrawerOpen}
          />
        </div>
        <div className="registerBtn">
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            Register
          </Button>
        </div>
        <div className="navbarSearchBar">
          <form autoComplete="off">
            <input
              type="search"
              placeholder="Search heros for people and groups"
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="navbarEmail">
          <Form.Group
            className="mb-3 emailHolder"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control
              autoComplete="off"
              className="emailField"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Your Email"
              style={{ padding: 10, width: 100 }}
            />
          </Form.Group>
        </div>
        <div className="navbarPwd">
          <Form.Group
            className="mb-3 pwdHolder"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control
              autoComplete="off"
              className="pwdField"
              type="password"
              onChange={(e) => {
                setPwd(e.target.value);
              }}
              placeholder="Your Password"
              style={{ padding: 10, width: 100 }}
            />
          </Form.Group>
        </div>
        <div
          className={signInError ? "navbarSignInError" : "navbarSignInSuccess"}
          style={{ marginRight: 20 }}
        >
          <IconButton onClick={handleLoginData}>
            <PowerSettingsNewIcon />
          </IconButton>
        </div>
      </div>
      {/* <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      <Outlet />

      <DrawerWidgetBefore
        DrawerHeader={DrawerHeader}
        draweropen={draweropen}
        theme={theme}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
    </React.Fragment>
  );
};

export default NavbarBefore;
