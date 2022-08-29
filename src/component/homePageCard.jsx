import React from "react";
import "../design/component/card/homePageCard.css";
import { Card, Image, Container, Button } from "react-bootstrap";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ViewTimelineOutlinedIcon from "@mui/icons-material/ViewTimelineOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import SubtitlesOutlinedIcon from "@mui/icons-material/SubtitlesOutlined";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Divider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange, pink, green } from "@mui/material/colors";
// import { ProgressBar } from "react-toastify/dist/components";

// ----------------for Tab pannel--------------------
const theme = createTheme({
  overrides: {
    MuiTabs: {
      indicator: {
        backgroundColor: orange[700],
      },
    },
    MuiTab: {
      root: {
        "&:hover": {
          backgroundColor: pink[100],
          color: pink[700],
        },
      },
      selected: {
        backgroundColor: orange[100],
        color: orange[700],
        "&:hover": {
          backgroundColor: green[100],
          color: green[700],
        },
      },
    },
  },
});
const HomePageMainCard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="cardsHolder">
      <Card className="text-center firstCardContainer">
        <Card.Header>
          <div className="headerImage">
            <Image className="logo" src="./Image/logo/Logo.png" />
          </div>
        </Card.Header>
        <Card.Body>
          <h1
            style={{
              color: "white",
              textAlign: "center",
              marginTop: 35,
              marginBottom: 0,
              fontFamily: "RajdhaniBold",
            }}
          >
            CryptoRPG
          </h1>

          <p
            style={{
              color: "#9AA4BF",
              textAlign: "center",
              marginTop: 5,
              fontSize: 17,
              fontFamily: "RajdhaniBold",
            }}
          >
            WWW.CRYPTORPG.CO
          </p>
          <div className="SocialMediaHolder">
            <a
              className="logoOne logos"
              href="https://www.facebook.com/"
              target={"_blank"}
            >
              <FacebookIcon />
            </a>
            <a
              className="logoTwo logos"
              href="https://twitter.com/"
              target={"_blank"}
            >
              <TwitterIcon />
            </a>
            <a
              className="logoThree logos"
              href="https://www.instagram.com/"
              target={"_blank"}
            >
              <InstagramIcon />
            </a>
            <a
              className="logoFour logos"
              href="https://www.twitch.tv/"
              target={"_blank"}
            >
              <i
                className="fa-brands fa-twitch"
                style={{ width: 20, height: 14 }}
              ></i>
            </a>
            <a
              className="logoFive logos"
              href="https://www.youtube.com/"
              target={"_blank"}
            >
              <YouTubeIcon />
            </a>
            <a
              className="logoSix logos"
              href="https://www.patreon.com/"
              target={"_blank"}
            >
              <i
                className="fa-brands fa-patreon"
                style={{ width: 20, height: 14 }}
              ></i>
            </a>
            <a
              className="logoSeven logos"
              href="https://discord.com/"
              target={"_blank"}
            >
              <i
                className="fa-brands fa-discord"
                style={{ width: 20, height: 14 }}
              ></i>
            </a>
          </div>
          <Card.Text>
            <div className="infoHolder">
              <div className="infoOne">
                930 <br />
                <span style={{ fontSize: 14, color: "#9AA4BF" }}>POSTS</span>
              </div>{" "}
              <span className="verticalLine"></span>
              <div className="infoTwo">
                82 <br />
                <span style={{ fontSize: 14, color: "#9AA4BF" }}>FRIENDS</span>
              </div>{" "}
              <span className="verticalLine"></span>
              <div className="infoThree">
                5.7K <br />
                <span style={{ fontSize: 14, color: "#9AA4BF" }}>VISTIS</span>
              </div>{" "}
              <span className="verticalLine"></span>
              <div className="infoFour">
                <Image
                  src="./Image/logo/united-states.png"
                  style={{ width: 24, height: 24 }}
                />{" "}
                <br />
                <span style={{ fontSize: 14, color: "#9AA4BF" }}>USA</span>{" "}
              </div>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div className="buttonHolder">
            <div className="addFriend">
              <Button className="addFriendBtn">Add Friend +</Button>
            </div>
            <div className="SendMessage">
              <Button variant="contained" className="sendMessageBtn">
                Send Message
              </Button>
            </div>
          </div>
        </Card.Footer>
      </Card>
      {/* --------------------second Card--------------------------- */}
      <Card className="text-center secondCardContainer">
        <Box
          sx={{ bgcolor: "background.paper", width: "100%", borderRadius: 20 }}
        >
          <AppBar
            position="static"
            sx={{ background: "#1D2333", borderRadius: 5 }}
          >
            <ThemeProvider theme={theme}>
              <Tabs
                value={value}
                onChange={handleChange}
                // indicatorColor="secondary"
                // inkBarStyle={{ background: "red" }}
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab
                  label={<ChevronLeftIcon />}
                  onMouseOver={() => {
                    console.log("Hellooooo------------->");
                  }}
                />
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  style={{ background: "#9AA4BF" }}
                />

                <Tab label={<AccountCircleOutlinedIcon />} />
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  style={{ background: "#9AA4BF" }}
                />

                <Tab label={<ViewTimelineOutlinedIcon />} />
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  style={{ background: "#9AA4BF" }}
                />

                <Tab label={<EmojiEmotionsOutlinedIcon />} />
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  style={{ background: "#9AA4BF" }}
                />

                <Tab label={<GroupsOutlinedIcon />} />
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  style={{ background: "#9AA4BF" }}
                />

                <Tab label={<ImageOutlinedIcon />} />
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  style={{ background: "#9AA4BF" }}
                />
                <Tab label={<SubtitlesOutlinedIcon />} />
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  style={{ background: "#9AA4BF" }}
                />
                <Tab label={<WorkspacePremiumIcon />} />
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  style={{ background: "#9AA4BF" }}
                />
                <Tab label={<YouTubeIcon />} />
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  style={{ background: "#9AA4BF" }}
                />
                <Tab label={<ChevronRightIcon />} />
              </Tabs>
            </ThemeProvider>
          </AppBar>
        </Box>
      </Card>
    </div>
  );
};

export default HomePageMainCard;
