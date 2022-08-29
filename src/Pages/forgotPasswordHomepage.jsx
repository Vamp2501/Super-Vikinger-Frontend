import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "../design/forgotPassoword/forgotPasswordHomepage.css";
const ForgotPasswordHomePage = ({ setOpen, accountEmail }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const sendMail = () => {
    setOpen(false);
    const accountEmail = {
      email,
    };
    axios({
      method: "POST",
      url: "http://localhost:3000/user/resetPasswordEmail",
      data: accountEmail,
    })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Success!");
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <React.Fragment>
      <div className="forgotPasswordContentHolder">
        <h1>Reset-Password Link!</h1>
        <p>
          Please Provide your Registered-email address so we provide the
          password reset link on your device through email!
        </p>
        <TextField
          id="outlined-email-input"
          label="Your Email"
          type="email"
          fullWidth
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
        <Button className="mailBtn" onClick={sendMail}>
          Send Email
        </Button>
      </div>
    </React.Fragment>
  );
};

export default ForgotPasswordHomePage;
