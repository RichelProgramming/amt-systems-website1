import React from "react";
import { Box, TextField, Button, Paper } from "@mui/material";
import TabSocialMedia from "./TabSocialMedia.components"
import img1 from "../../assets/contact_spire.svg";
import { motion } from "framer-motion";
import CustumTitle from '../CustumTitle';

const ContactPage = () => {
  const title="Let's stay in contact";
  return (
    <div>
        <CustumTitle title={title} />
    <Box display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent="center"  gap={4} p={2}>
      
      <Box alignContent="center" justifyItems="center" alignItems="center" sx={{ width: { xs: "100%", md: "50%" }, height: "auto", overflow: "hidden", borderRadius: 2 }}>
            <TabSocialMedia/>
      </Box>

      <Box p={3} width={{ xs: "100%", md: "40%" }} borderRadius={2} bgcolor="transparent">
           <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                 <img style={{width:'100%' , height:'300px'}} src={img1}/>
               </motion.div> 
      </Box>
    </Box>
    </div>
  );
};

export default ContactPage;
