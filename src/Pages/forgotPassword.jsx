import React, { useState } from "react";

import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import "../design/forgotPassoword/forgotPassword.css";
import axios from "axios";
import { toast } from "react-toastify";
const ForgotPassword = ({ userId }) => {
  const [newPasswordError, setnewPasswordError] = useState(false);
  const [cnewPasswordError, setcnewPasswordError] = useState(false);
  const [cnewPassword, setcnewPassword] = useState();
  const [newPassword, setnewPassword] = useState();
  const changePasswordNow = () => {
    const updatePassword = {
      newPassword,
      cnewPassword,
    };
    if (newPassword !== cnewPassword) {
      setcnewPasswordError(true);
    }
    if (newPassword === cnewPassword) {
      axios({
        method: "POST",
        url: `http://localhost:8080/user/resetPassword/${userId}`,
        data: updatePassword,
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
      <p
        style={{
          fontSize: 12,
          textTransform: "uppercase",
          color: "#616a82",
          margin: 0,
          padding: 0,
        }}
      >
        Account
      </p>
      <h1 style={{ margin: 0, padding: 0 }}>Reset Password</h1>
      <div className="resetPasswordFieldHolder">
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
            className="updateBtn"
            onClick={() => {
              changePasswordNow();
            }}
          >
            Update Password
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForgotPassword;
