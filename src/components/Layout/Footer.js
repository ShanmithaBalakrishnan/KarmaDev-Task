import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
import "../../styles/FooterStyles.css";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#000000", color: "white", p: 3 }}>
        <div className="Footer">
          <Box
            sx={{
              my: 3,
              "& svg": {
                fontSize: "30px",
                cursor: "pointer",
                mr: 2,
              },
              "& svg:hover": {
                color: "goldenrod",
                transform: "translateX(5px)",
                transition: "all 400ms",
              },
            }}
          >
            {/* icons */}
            <InstagramIcon />
            <TwitterIcon />
            <YouTubeIcon />
          </Box>
          <Typography
            variant="p"
            sx={{
              "@media (max-width:600px)": {
                fontSize: "10px",
              },
            }}
          >
            All Rights Reserved &copy;{" "}
            <span>
              <a href="https://shanmithbalakrishnan.netlify.app/" target="_blank"  id="copy">
                ShanmithaBalakrishnan
              </a>
            </span>
          </Typography>
        </div>
      </Box>
    </>
  );
};

export default Footer;
