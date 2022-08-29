import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "../design/Form/signup/signup.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {
  Checkbox,
  Divider,
  FormControl,
  InputLabel,
  Modal,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Button, Image } from "react-bootstrap";
import {
  FlashOnTwoTone,
  NotificationsNone,
  RememberMe,
} from "@mui/icons-material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Backdrop from "@mui/material/Backdrop";
import { useNavigate } from "react-router-dom";
import ForgotPasswordHomePage from "./forgotPasswordHomepage";

const SignupPage = () => {
  // for the protected routing-----------------------

  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const [repeatPwd, setRepeatPwd] = useState("");
  const [signupData, setSignupData] = useState([]);
  const [emailError, setEmailError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [notificationOn, setNotificationOn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [repeatPwdError, setRepeatPwdError] = useState(false);
  const [emailUserName, setEmailUserName] = useState("");
  const [pwdLogin, setPwdLogin] = useState("");
  const [loginData, setLoginData] = useState("");

  const [alignment, setAlignment] = React.useState("register");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleToggleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  useEffect(() => {
    console.log("alignment--------------->", alignment);
  }, [alignment]);

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  // const handleClickShowPassword = () => {
  //   setValues({
  //     ...values,
  //     showPassword: !values.showPassword,
  //   });
  // };

  // const handleMouseDownPassword = (event) => {};

  const handleSubmit = (event) => {
    if (pwd === repeatPwd) {
      if (email && userName && pwd && repeatPwd && notificationOn) {
        const profileData = {
          email: email,
          userName: userName,
          password: pwd,
          repeatPassword: repeatPwd,
          notificationOn: notificationOn,
        };
        console.log(profileData);
        axios({
          method: "post",
          url: "http://localhost:8080/user/Register",
          data: profileData,
        })
          .then(function (response) {
            //handle success
            if (response.status === 200) {
              toast.success("success!");
              setAlignment("login");
            }
            console.log(response);
            setEmail("");
            setPwd("");
            setUserName("");
            setRepeatPwd("");
            // setTimeout(() => {
            //   navigate("/homepage");
            // }, 5000);
          })
          .catch((err) => {
            //handle error
            // if (response.status !== 200) {
            console.log("err : ", err.response.data);
            toast.error(err.response.data.message);
            // }
          });
      }
    } else {
      setRepeatPwdError(true);
    }
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (emailUserName && pwdLogin && rememberMe) {
      const loginData = {
        email: emailUserName,
        password: pwdLogin,
      };
      axios
        .post("http://localhost:8080/user/Login", loginData)
        .then((response) => {
          console.log("loginResponse----------------->", response.data.token);
          localStorage.setItem("Token", JSON.stringify(response.data.token));
          navigate("/homepage");
        })
        .catch((err) => {
          console.log("err : ", err.response.data);
          toast.error(err.response.data.message);
        });
    } else {
      alert("Please fill the form details properly!");
    }
  };

  return (
    <React.Fragment>
      <div className="signUpPage">
        <div className="siteTextHolder">
          <Image
            src="./Image/logo/vikinger-logo.png"
            style={{ width: 60, height: 60, marginTop: 20 }}
          />
          <h1 style={{ marginTop: 15, marginBottom: 20 }}>
            <p
              style={{
                color: "white",
                fontFamily: "RajdhaniLight",
                fontSize: 17,
                marginBottom: 0,
              }}
            >
              WELCOME TO
            </p>
            VIKINGER
          </h1>
        </div>
        <div className="toggleButtonHolder">
          <ToggleButtonGroup
            style={{ backgroundColor: "transparent", color: "white" }}
            value={alignment}
            exclusive={true}
            onChange={handleToggleChange}
          >
            <ToggleButton value="register">Register</ToggleButton>
            <ToggleButton value="login">Login</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div
          style={{ marginBottom: 10 }}
          className={
            alignment === "register"
              ? "displayShow  registrationForm"
              : "displayNone"
          }
        >
          <h1
            style={{ fontFamily: "RajdhaniBold", textTransform: "uppercase" }}
          >
            Create Your Account!
          </h1>
          <Box component="form" className="formHolder" noValidate>
            <TextField
              id="outlined-email-input"
              label="Your Email"
              type="email"
              sx={{ width: 300 }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (e.target.value === "") {
                  setEmailError(true);
                }
                if (e.target.value !== "") {
                  setEmailError(false);
                }
              }}
              onBlur={(e) => {
                setEmail(e.target.value);
                if (e.target.value === "") {
                  setEmailError(true);
                }
                if (e.target.value !== "") {
                  setEmailError(false);
                }
              }}
              helperText={emailError ? "Please Enter Email!" : ""}
              error={emailError}
              InputProps={{
                style: {
                  fontSize: 15,
                  fontFamily: "RajdhaniBold",
                  color: "darkgray",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: 15,
                  fontFamily: "RajdhaniBold",
                  color: "darkgray",
                },
              }}
            />
            <TextField
              id="outlined-username-input"
              label="Username"
              type="text"
              sx={{ width: 300 }}
              error={userNameError}
              value={userName}
              autoComplete="off"
              onChange={(e) => {
                setUserName(e.target.value);
                if (e.target.value === "") {
                  setUserNameError(true);
                }
                if (e.target.value !== "") {
                  setUserNameError(false);
                }
              }}
              onBlur={(e) => {
                setUserName(e.target.value);
                if (e.target.value === "") {
                  setUserNameError(true);
                }
                if (e.target.value !== "") {
                  setUserNameError(false);
                }
              }}
              helperText={userNameError ? "Please Enter Your UserName" : ""}
              InputProps={{
                style: {
                  fontSize: 15,
                  fontFamily: "RajdhaniBold",
                  color: "darkgray",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: 15,
                  fontFamily: "RajdhaniBold",
                  color: "darkgray",
                },
              }}
            />
            {/* <FormControl
            variant="outlined"
            error={pwdError}
            sx={{ width: 350 }}
            onChange={(e) => {
              setPwd(e.target.value);
              if (e.target.value === "") {
                setPwdError(true);
              }
              if (e.target.value !== "") {
                setPwdError(false);
              }
            }}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? (
                      <VisibilityOff style={{ color: pwdError ? "red" : "" }} />
                    ) : (
                      <Visibility style={{ color: pwdError ? "red" : "" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              autoComplete="off"
              helperText="Enter Password"
            />
          </FormControl> */}
            <TextField
              onChange={(e) => {
                setPwd(e.target.value);
                if (e.target.value === "") {
                  setPwdError(true);
                }
                if (e.target.value !== "") {
                  setPwdError(false);
                }
              }}
              onBlur={(e) => {
                setPwd(e.target.value);
                if (e.target.value === "") {
                  setPwdError(true);
                }
                if (e.target.value !== "") {
                  setPwdError(false);
                }
              }}
              id="outlined-pwd-input"
              label="Passwrod"
              type="password"
              sx={{ width: 300 }}
              autoComplete="off"
              error={pwdError}
              value={pwd}
              helperText={pwdError ? "Enter Passwrod" : ""}
              InputProps={{
                style: {
                  fontSize: 15,
                  fontFamily: "RajdhaniBold",
                  color: "darkgray",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: 15,
                  fontFamily: "RajdhaniBold",
                  color: "darkgray",
                },
              }}
            />
            <TextField
              onChange={(e) => {
                setRepeatPwd(e.target.value);
                if (e.target.value === "") {
                  setRepeatPwdError(true);
                }
                if (e.target.value !== "") {
                  setRepeatPwdError(false);
                }
              }}
              onBlur={(e) => {
                setRepeatPwd(e.target.value);
                if (e.target.value === "") {
                  setRepeatPwdError(true);
                }
                if (e.target.value !== "") {
                  setRepeatPwdError(false);
                }
              }}
              id="outlined-repeat-input"
              label="Repeat Passwrod"
              type="password"
              sx={{
                width: 300,
              }}
              InputProps={{
                style: {
                  fontSize: 15,
                  fontFamily: "RajdhaniBold",
                  color: "darkgray",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: 15,
                  fontFamily: "RajdhaniBold",
                  color: "darkgray",
                },
              }}
              autoComplete="off"
              value={repeatPwd}
              error={repeatPwdError}
              helperText={repeatPwdError ? "Please Enter Confirm-Passwrod" : ""}
            />
            <div
              className="checkboxHolder"
              style={{
                width: 300,
                textAlign: "left",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Checkbox
                onChange={() => {
                  setNotificationOn((prev) => !prev);
                }}
                icon={<BookmarkBorderIcon sx={{ color: "darkGray" }} />}
                checkedIcon={<BookmarkIcon />}
              />
              <p
                style={{
                  fontFamily: "RajdhaniBold",
                  color: "darkgray",
                  fontSize: 15,
                }}
              >
                Send Me Update Via News And Email
              </p>
            </div>
            <Button
              onClick={(event) => {
                handleSubmit(event);
              }}
              style={{
                width: 300,
                color: "white",
                fontSize: 16,
                border: "none",
                borderRadius: 8,
                fontFamily: "RajdhaniBold",
                height: 56,
                backgroundColor: "#40d04f",
                cursor: "pointer",
              }}
            >
              Register Now!
            </Button>
          </Box>
          <p
            style={{
              color: "darkgray",
              fontSize: 11,
              fontFamily: "RajdhaniBold",
              width: "282px",
              margin: "20px auto auto",
            }}
          >
            You 'll receive confirmation email in your inbox with a link to
            activate your account .if you have any problem ,
            <a href="/fgfdgdf" style={{ color: "#40d04f" }}>
              contact us!
            </a>{" "}
          </p>
        </div>
        <div
          className={
            alignment === "login" ? "displayShow  loginForm" : "displayNone"
          }
        >
          <h1
            style={{ fontFamily: "RajdhaniBold", textTransform: "uppercase" }}
          >
            Account Login
          </h1>
          <Box component="form" className="formHolder" noValidate>
            <TextField
              id="outlined-email-input"
              label="UserName Or Email"
              type="text"
              sx={{ width: 300 }}
              onChange={(e) => {
                setEmailUserName(e.target.value);
                if (e.target.value === "") {
                  setEmailError(true);
                }
                if (e.target.value !== "") {
                  setEmailError(false);
                }
              }}
              onBlur={(e) => {
                if (e.target.value === "") {
                  setEmailError(true);
                }
                if (e.target.value !== "") {
                  setEmailError(false);
                }
              }}
              helperText={emailError ? "Please Enter UserName Or Email!" : ""}
              error={emailError}
              InputProps={{
                style: {
                  fontSize: 15,
                  fontFamily: "RajdhaniBold",
                  color: "darkgray",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: 15,
                  fontFamily: "RajdhaniBold",
                  color: "darkgray",
                },
              }}
            />

            {/* <FormControl
            variant="outlined"
            error={pwdError}
            sx={{ width: 350 }}
            onChange={(e) => {
              setPwd(e.target.value);
              if (e.target.value === "") {
                setPwdError(true);
              }
              if (e.target.value !== "") {
                setPwdError(false);
              }
            }}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? (
                      <VisibilityOff style={{ color: pwdError ? "red" : "" }} />
                    ) : (
                      <Visibility style={{ color: pwdError ? "red" : "" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              autoComplete="off"
              helperText="Enter Password"
            />
          </FormControl> */}
            <TextField
              onChange={(e) => {
                setPwdLogin(e.target.value);
                if (e.target.value === "") {
                  setPwdError(true);
                }
                if (e.target.value !== "") {
                  setPwdError(false);
                }
              }}
              onBlur={(e) => {
                if (e.target.value === "") {
                  setPwdError(true);
                }
                if (e.target.value !== "") {
                  setPwdError(false);
                }
              }}
              id="outlined-pwd-input"
              label="Passwrod"
              type="password"
              sx={{ width: 300 }}
              autoComplete="off"
              error={pwdError}
              helperText={pwdError ? "Enter Passwrod" : ""}
              InputProps={{
                style: {
                  fontSize: 15,
                  fontFamily: "RajdhaniBold",
                  color: "darkgray",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: 15,
                  fontFamily: "RajdhaniBold",
                  color: "darkgray",
                },
              }}
            />
            <div
              className="checkWithForgot"
              style={{
                width: 300,
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="checkboxHolder"
                style={{
                  width: 150,
                  textAlign: "left",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Checkbox
                  onChange={() => {
                    setRememberMe((prev) => !prev);
                  }}
                  icon={<BookmarkBorderIcon sx={{ color: "darkGray" }} />}
                  checkedIcon={<BookmarkIcon />}
                />
                <p
                  style={{
                    fontFamily: "RajdhaniBold",
                    color: "darkgray",
                    fontSize: 15,
                  }}
                >
                  Remember Me
                </p>
              </div>
              <div className="forGotPasswrod">
                <a
                  onClick={handleOpen}
                  style={{
                    fontFamily: "RajdhaniBold",
                    color: "darkgray",
                    fontSize: 15,
                    cursor: "pointer",
                  }}
                >
                  Forgot Password
                </a>
              </div>
            </div>
            <Button
              onClick={(event) => {
                handleLoginSubmit(event);
              }}
              style={{
                width: 300,
                color: "white",
                fontSize: 16,
                border: "none",
                borderRadius: 8,
                fontFamily: "RajdhaniBold",
                height: 56,
                backgroundColor: "#9467FF",
                cursor: "pointer",
              }}
            >
              Login to your Account!
            </Button>
          </Box>
          <div className="loginFooter">
            <div className="separator">Login With Your Social Account</div>
            <div className="logosFooter">
              <div className="logoOne logos">
                <FacebookIcon />
              </div>
              <div className="logoTwo logos">
                <TwitterIcon />
              </div>

              <div className="logoFour logos">
                <i
                  className="fa-brands fa-twitch"
                  style={{ width: 20, height: 14 }}
                ></i>
              </div>
              <div className="logoFive logos">
                <YouTubeIcon />
              </div>
            </div>
          </div>
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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <ForgotPasswordHomePage setOpen={setOpen} />
      </Modal>
    </React.Fragment>
  );
};

export default SignupPage;
