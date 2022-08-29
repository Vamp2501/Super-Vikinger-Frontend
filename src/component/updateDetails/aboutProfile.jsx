import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";

import "../../design/UpdatePersonalnfo/aboutProfile.css";
const AboutProfile = ({
  fullName,
  setFullName,
  accountEmail,
  setAccountEmail,
  urlUserName,
  setUrlUserName,
  phoneNumber,
  setPhoneNumber,
  setAccountCountry,
  accountCountry,
  language,
  setLanguage,
  recoveryEmail,
  setRecoveryEmail,
  recoveryPhone,
  setrecoveryPhone,
  questionOne,
  setquestionOne,
  questionTwo,
  setquestionTwo,
  questionThree,
  setquestionThree,
  recoveryAnswerOne,
  recoveryAnswerTwo,
  recoveryAnswerThree,
  setrecoveryAnswerOne,
  setrecoveryAnswerTwo,
  setrecoveryAnswerThree,
}) => {
  const [fullNameError, setFullNameError] = useState(false);
  const [accountEmailError, setAccountEmailError] = useState(false);
  const [urlUserNameError, setUrlUserNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [recoveryEmailError, setRecoveryEmailError] = useState(false);
  const [recoveryPhoneError, setRecoveryPhoneError] = useState(false);
  const [recoveryQuestionOneError, setRecoveryQuestionOneError] =
    useState(false);
  const [recoveryQuestionTwoError, setRecoveryQuestionTwoError] =
    useState(false);
  const [recoveryQuestionThreeError, setRecoveryQuestionThreeError] =
    useState(false);
  const [countryName, setCountryName] = useState([]);

  useEffect(() => {
    setCountryName(Country.getAllCountries().map((data) => data));
  }, []);
  return (
    <React.Fragment>
      <p
        style={{
          fontSize: 12,
          textTransform: "uppercase",
          color: "#616a82",
          fontFamily: "RajdhaniBold",
          margin: 0,
          padding: 0,
        }}
      >
        Account
      </p>
      <h1 style={{ fontFamily: "RajdhaniBold", margin: 0, padding: 0 }}>
        Account Info
      </h1>
      <div className="accountPersonalInfoHolder">
        <p style={{ marginBottom: 10 }}>Personal Info</p>
        <form>
          <div className="fieldHolder">
            <div className="rowOne">
              <TextField
                id="outlined-Fullname-input"
                label="Full Name"
                type="text"
                sx={{ width: 450 }}
                error={fullNameError}
                value={fullName}
                autoComplete="off"
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (e.target.value === "") {
                    setFullNameError(true);
                  }
                  if (e.target.value !== "") {
                    setFullNameError(false);
                  }
                }}
                onBlur={(e) => {
                  setFullName(e.target.value);
                  if (e.target.value === "") {
                    setFullNameError(true);
                  }
                  if (e.target.value !== "") {
                    setFullNameError(false);
                  }
                }}
                helperText={fullNameError ? "Please Enter Your Full-Name" : ""}
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
              <TextField
                id="outlined-AccountEmail-input"
                label="Account Email"
                type="text"
                sx={{ width: 450 }}
                error={accountEmailError}
                value={accountEmail}
                autoComplete="off"
                onChange={(e) => {
                  setAccountEmail(e.target.value);
                  if (e.target.value === "") {
                    setAccountEmailError(true);
                  }
                  if (e.target.value !== "") {
                    setAccountEmailError(false);
                  }
                }}
                onBlur={(e) => {
                  setAccountEmail(e.target.value);
                  if (e.target.value === "") {
                    setAccountEmailError(true);
                  }
                  if (e.target.value !== "") {
                    setAccountEmailError(false);
                  }
                }}
                helperText={
                  accountEmailError ? "Please Enter Your Account Email" : ""
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
                id="outlined-urlUserName-input"
                label="URL Username:www.vikinger.com/"
                type="text"
                sx={{ width: 450 }}
                error={urlUserNameError}
                value={urlUserName}
                autoComplete="off"
                onChange={(e) => {
                  setUrlUserName(e.target.value);
                  if (e.target.value === "") {
                    setUrlUserNameError(true);
                  }
                  if (e.target.value !== "") {
                    setUrlUserNameError(false);
                  }
                }}
                onBlur={(e) => {
                  setUrlUserName(e.target.value);
                  if (e.target.value === "") {
                    setUrlUserNameError(true);
                  }
                  if (e.target.value !== "") {
                    setUrlUserNameError(false);
                  }
                }}
                helperText={
                  urlUserNameError ? "Please Enter Your URL UserName" : ""
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
              <TextField
                id="outlined-phoneNumber-input"
                label="Phone Number"
                type="number"
                sx={{ width: 450 }}
                error={phoneNumberError}
                value={phoneNumber}
                autoComplete="off"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  if (e.target.value === "") {
                    setPhoneNumberError(true);
                  }
                  if (e.target.value !== "") {
                    setPhoneNumberError(false);
                  }
                }}
                onBlur={(e) => {
                  setPhoneNumber(e.target.value);
                  if (e.target.value === "") {
                    setPhoneNumberError(true);
                  }
                  if (e.target.value !== "") {
                    setPhoneNumberError(false);
                  }
                }}
                helperText={
                  phoneNumberError ? "Please Enter Your Phone-Number" : ""
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
            <div className="rowThree">
              <FormControl sx={{ width: 450, borderRadius: 18 }}>
                <InputLabel
                  sx={{ color: "#616a82", fontFamily: "RajdhaniBold" }}
                  id="demo-Accountcountry-label"
                >
                  Country
                </InputLabel>
                <Select
                  labelId="demo-Accountcountry-label"
                  id="demo-Accountcountry"
                  value={accountCountry}
                  label="Country"
                  sx={{ color: "white", fontFamily: "RajdhaniBold" }}
                  onChange={(e) => {
                    setAccountCountry(e.target.value);
                  }}
                >
                  {countryName?.map((data, index) => {
                    return (
                      <MenuItem
                        key={index}
                        selected
                        sx={{
                          fontFamily: "RajdhaniBold",
                          backgroundColor: "#1d2333",
                        }}
                        value={data.name}
                      >
                        {data.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl sx={{ width: 450, borderRadius: 18 }}>
                <InputLabel
                  sx={{ color: "#616a82", fontFamily: "RajdhaniBold" }}
                  id="demo-language-label"
                >
                  Language
                </InputLabel>
                <Select
                  labelId="demo-language-label"
                  id="demo-language"
                  value={language}
                  label="Language"
                  sx={{ color: "white", fontFamily: "RajdhaniBold" }}
                  onChange={(e) => {
                    setLanguage(e.target.value);
                  }}
                >
                  <MenuItem selected value="English">
                    English
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </form>
      </div>
      <div className="securityInfo">
        <p style={{ marginBottom: 15 }}>Security Info</p>
        <form>
          <div className="securityFieldHolder">
            <div className="rowOne">
              {" "}
              <TextField
                id="outlined-RecoveryEmail-input"
                label="Recovery Email"
                type="email"
                sx={{ width: 450 }}
                error={recoveryEmailError}
                value={recoveryEmail}
                autoComplete="off"
                onChange={(e) => {
                  setRecoveryEmail(e.target.value);
                  if (e.target.value === "") {
                    setRecoveryEmailError(true);
                  }
                  if (e.target.value !== "") {
                    setRecoveryEmailError(false);
                  }
                }}
                onBlur={(e) => {
                  setRecoveryEmail(e.target.value);
                  if (e.target.value === "") {
                    setRecoveryEmailError(true);
                  }
                  if (e.target.value !== "") {
                    setRecoveryEmailError(false);
                  }
                }}
                helperText={
                  recoveryEmailError ? "Please Enter Your Recovery-Email!" : ""
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
              />{" "}
              <TextField
                id="outlined-RecoveryPhone-input"
                label="Recovery Phone"
                type="number"
                sx={{ width: 450 }}
                error={recoveryPhoneError}
                value={recoveryPhone}
                autoComplete="off"
                onChange={(e) => {
                  setrecoveryPhone(e.target.value);
                  if (e.target.value === "") {
                    setRecoveryPhoneError(true);
                  }
                  if (e.target.value !== "") {
                    setRecoveryPhoneError(false);
                  }
                }}
                onBlur={(e) => {
                  setrecoveryPhone(e.target.value);
                  if (e.target.value === "") {
                    setRecoveryPhoneError(true);
                  }
                  if (e.target.value !== "") {
                    setRecoveryPhoneError(false);
                  }
                }}
                helperText={
                  recoveryPhoneError
                    ? "Please Enter Your Recovery Phone-Number"
                    : ""
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
              <FormControl sx={{ width: 450, borderRadius: 18 }}>
                <InputLabel
                  sx={{ color: "#616a82", fontFamily: "RajdhaniBold" }}
                  id="demo-questionOne-label"
                >
                  Security Question 01
                </InputLabel>
                <Select
                  labelId="demo-questionOne-label"
                  id="demo-questionOne"
                  value={questionOne}
                  label="Security Question 01"
                  sx={{ color: "white", fontFamily: "RajdhaniBold" }}
                  onChange={(e) => {
                    setquestionOne(e.target.value);
                  }}
                >
                  <MenuItem selected value="What's your favourite food?">
                    What's your favourite food?
                  </MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="outlined-RecoveryQuestionOne-input"
                label="Recovery QuestionOne"
                type="text"
                sx={{ width: 450 }}
                error={recoveryQuestionOneError}
                value={recoveryAnswerOne}
                autoComplete="off"
                onChange={(e) => {
                  setrecoveryAnswerOne(e.target.value);
                  if (e.target.value === "") {
                    setRecoveryQuestionOneError(true);
                  }
                  if (e.target.value !== "") {
                    setRecoveryQuestionOneError(false);
                  }
                }}
                onBlur={(e) => {
                  setrecoveryAnswerOne(e.target.value);
                  if (e.target.value === "") {
                    setRecoveryQuestionOneError(true);
                  }
                  if (e.target.value !== "") {
                    setRecoveryQuestionOneError(false);
                  }
                }}
                helperText={
                  recoveryQuestionOneError
                    ? "Please Enter Your Recovery QuestionOne-Number"
                    : ""
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
            <div className="rowThree">
              {" "}
              <FormControl sx={{ width: 450, borderRadius: 18 }}>
                <InputLabel
                  sx={{ color: "#616a82", fontFamily: "RajdhaniBold" }}
                  id="demo-questionTwo-label"
                >
                  Security Question 02
                </InputLabel>
                <Select
                  labelId="demo-questionTwo-label"
                  id="demo-questionTwo"
                  value={questionTwo}
                  label="Security Question 02"
                  sx={{ color: "white", fontFamily: "RajdhaniBold" }}
                  onChange={(e) => {
                    setquestionTwo(e.target.value);
                  }}
                >
                  <MenuItem selected value="What's the name of your pet?">
                    What's the name of your pet?
                  </MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="outlined-RecoveryQuestionTwo-input"
                label="Recovery QuestionTwo"
                type="text"
                sx={{ width: 450 }}
                error={recoveryQuestionTwoError}
                value={recoveryAnswerTwo}
                autoComplete="off"
                onChange={(e) => {
                  setrecoveryAnswerTwo(e.target.value);
                  if (e.target.value === "") {
                    setRecoveryQuestionTwoError(true);
                  }
                  if (e.target.value !== "") {
                    setRecoveryQuestionTwoError(false);
                  }
                }}
                onBlur={(e) => {
                  setrecoveryAnswerTwo(e.target.value);
                  if (e.target.value === "") {
                    setRecoveryQuestionTwoError(true);
                  }
                  if (e.target.value !== "") {
                    setRecoveryQuestionTwoError(false);
                  }
                }}
                helperText={
                  recoveryQuestionTwoError
                    ? "Please Enter Your Recovery QuestionTwo-Number"
                    : ""
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
            <div className="rowFour">
              {" "}
              <FormControl sx={{ width: 450, borderRadius: 18 }}>
                <InputLabel
                  sx={{ color: "#616a82", fontFamily: "RajdhaniBold" }}
                  id="demo-questionThree-label"
                >
                  Security Question 03
                </InputLabel>
                <Select
                  labelId="demo-questionThree-label"
                  id="demo-questionThree"
                  value={questionThree}
                  label="Security Question 03"
                  sx={{ color: "white", fontFamily: "RajdhaniBold" }}
                  onChange={(e) => {
                    setquestionThree(e.target.value);
                  }}
                >
                  <MenuItem selected value="What's your favourite Sport?">
                    What's your favourite Sport?
                  </MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="outlined-RecoveryQuestionThree-input"
                label="Recovery QuestionThree"
                type="text"
                sx={{ width: 450 }}
                error={recoveryQuestionThreeError}
                value={recoveryAnswerThree}
                autoComplete="off"
                onChange={(e) => {
                  setrecoveryAnswerThree(e.target.value);
                  if (e.target.value === "") {
                    setRecoveryQuestionThreeError(true);
                  }
                  if (e.target.value !== "") {
                    setRecoveryQuestionThreeError(false);
                  }
                }}
                onBlur={(e) => {
                  setrecoveryAnswerThree(e.target.value);
                  if (e.target.value === "") {
                    setRecoveryQuestionThreeError(true);
                  }
                  if (e.target.value !== "") {
                    setRecoveryQuestionThreeError(false);
                  }
                }}
                helperText={
                  recoveryQuestionThreeError
                    ? "Please Enter Your Recovery Question's Answer"
                    : ""
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
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AboutProfile;
