import React, { useState } from "react";
import { Box, TextField, Button, Paper } from "@mui/material";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleLang = (_e, newLang) => {
    if (!newLang) return;
    setLang(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("lng", newLang);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",   
        "YOUR_TEMPLATE_ID",  
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"   
      );
      alert(t("sentOk"));
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      alert(t("sentError"));
    }
  };

  return (
    <Box display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent="center" alignItems="center" gap={4} p={2}>
      {/* Map Section */}
      <Paper elevation={3} sx={{ width: { xs: "100%", md: "50%" }, height: 400, overflow: "hidden", borderRadius: 2 }}>
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4142.038933748019!2d2.3522219!3d48.856614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d87783e885%3A0x8dcbff4d32dd0762!2sFrance!5e0!3m2!1sfr!2sfr!4v1711090703406!5m2!1sfr!2sfr"
          allowFullScreen
        ></iframe>
      </Paper>
      
      {/* Contact Form Section */}
      <Box p={3} width={{ xs: "100%", md: "40%" }} borderRadius={2} bgcolor="transparent">
        <TextField 
          fullWidth 
          placeholder="your Name"
          margin="normal" 
          variant="outlined" 
          style={{border:'1px solid #333366',borderRadius:"5px"}}
          InputProps={{ style: { color: "#333366" } }}
        />
        <TextField 
          fullWidth 
          placeholder="Email"
          margin="normal" 
          variant="outlined" 
          style={{border:'1px solid #333366',borderRadius:"5px"}}
          InputLabelProps={{ style: { color: "white" } }}
          InputProps={{ style: { color: "#333366" } }}
        />
        <TextField
          fullWidth
          placeholder="Message"
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
          style={{border:'1px solid #333366',borderRadius:"5px"}}
          InputProps={{ style: { color: "#333366" } }}
        />
        <Button variant="contained" fullWidth sx={{ mt: 2, backgroundColor: "#333366" }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ContactPage;
