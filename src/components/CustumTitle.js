import React from "react";
import {Typography } from "@mui/material";


const gradientStyle = {
  background: "linear-gradient(90deg,rgb(102, 188, 70),rgb(65, 66, 141),red)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const CustumTitle = ({title}) =>{
    return(
       <Typography variant="h4" fontWeight="bold" textAlign="center" paddingTop={10} gutterBottom sx={gradientStyle}>
            {title}
       </Typography>
    )
}

export default CustumTitle;