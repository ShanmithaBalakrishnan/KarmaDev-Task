import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import "../styles/ContactStyles.css";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout className='contact'>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Us</Typography>
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
            beatae ducimus magni nobis culpa praesentium velit expedita quae,
            corrupti, pariatur inventore laboriosam consectetur modi impedit
            error, repudiandae obcaecati doloribus.
          </p>
        </div>
      </Box>
      <Box sx={{ m: 3, width: "600px", ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
          "@media (max-width:400px)": {
            width: "250px",
          },
        }} className="box">

        <TableContainer component={Paper} >
          <Table aria-label="contact table" >
            <TableHead className="table">
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center">
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell id="TableCell">
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell id="TableCell">
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  xxxxxxxxxx@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell id="TableCell">
                  <CallIcon sx={{ color: "green", pt: 1 }} /> +91 xxxxxxxxxx
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
