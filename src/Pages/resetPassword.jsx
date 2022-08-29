import { TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "../design/forgotPassoword/resetPassword.css";
import { useLocation } from "react-router-dom";
const ResetPassword = () => {
  const [newPassword, setnewPassword] = useState();
  const [cnewPassword, setcnewPassword] = useState();
  const [newPasswordError, setnewPasswordError] = useState(false);
  const [cnewPasswordError, setcnewPasswordError] = useState();
  const [userId, setUserId] = useState("");
  const location = useLocation();
  useEffect(() => {
    setUserId(location.pathname.slice(16));
  }, [location]);
  const updatePasswordNow = () => {
    const updatetedPassword = {
      newPassword,
      cnewPassword,
      userId,
    };
    if (newPassword !== cnewPassword) {
      setcnewPasswordError(true);
    }
    if (newPassword === cnewPassword) {
      console.log(updatetedPassword);
      axios({
        method: "POST",
        url: `http://localhost:8080/user/updatePassword`,
        data: updatetedPassword,
        headers: {
          "x-access-token": localStorage.getItem("Token"),
        },
      })
        .then(function (response) {
          //handle success
          if (response.status === 200) {
            toast.success("success!");
          }
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    }
  };
  return (
    <React.Fragment>
      <div className="resetPasswordFieldHolder">
        <h1 style={{ margin: 0 }}>Reset Password</h1>
        <p>Please Enter Your New Password!</p>
        <div className="rowOne">
          <TextField
            id="outlined-NewPassword-input"
            label="New Password"
            type="password"
            sx={{ width: 450, margin: "0px auto" }}
            error={newPasswordError}
            value={newPassword}
            autoComplete="off"
            onChange={(e) => {
              setnewPassword(e.target.value);
              if (e.target.value === "") {
                setnewPasswordError(true);
              }
              if (e.target.value !== "") {
                setnewPasswordError(false);
              }
            }}
            onBlur={(e) => {
              setnewPassword(e.target.value);
              if (e.target.value === "") {
                setnewPasswordError(true);
              }
              if (e.target.value !== "") {
                setnewPasswordError(false);
              }
            }}
            helperText={
              newPasswordError ? "Please Enter Your New-Password!" : ""
            }
            InputProps={{
              style: {
                fontSize: 15,
                fontFamily: "RajdhaniBold",
                color: "white",
              },
            }}
            InputLabelProps={{
              style: {
                fontSize: 15,
                fontFamily: "RajdhaniBold",
                color: "#616a82",
              },
            }}
          />
        </div>
        <div className="rowTwo">
          <TextField
            id="outlined-cnewPassword-input"
            label="Confirm New Password"
            type="password"
            sx={{ width: 450, margin: "0px auto" }}
            error={cnewPasswordError}
            value={cnewPassword}
            autoComplete="off"
            onChange={(e) => {
              setcnewPassword(e.target.value);
              if (e.target.value === "") {
                setcnewPasswordError(true);
              }
              if (e.target.value !== "") {
                setcnewPasswordError(false);
              }
            }}
            onBlur={(e) => {
              setcnewPassword(e.target.value);
              if (e.target.value === "") {
                setcnewPasswordError(true);
              }
              if (e.target.value !== "") {
                setcnewPasswordError(false);
              }
            }}
            helperText={cnewPasswordError ? "Confirm-password not match" : ""}
            InputProps={{
              style: {
                fontSize: 15,
                fontFamily: "RajdhaniBold",
                color: "white",
              },
            }}
            InputLabelProps={{
              style: {
                fontSize: 15,
                fontFamily: "RajdhaniBold",
                color: "#616a82",
              },
            }}
          />
        </div>
        <div className="button">
          <Button
            className="updatedBtn"
            onClick={() => {
              updatePasswordNow();
            }}
          >
            Update Password
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResetPassword;
