import React, { useMemo, useRef, useState } from "react";
import {
  Box, TextField, Button, Paper, MenuItem, Snackbar, Alert,
  InputAdornment, FormControl, Select, FormHelperText, Typography, Divider
} from "@mui/material";
import { Person, Email as EmailIcon, Phone, Business, Chat } from "@mui/icons-material";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const SERVICE_ID = "service_0z7kgsq";
const TEMPLATE_ID = "template_qnh3yys";
const PUBLIC_KEY  = "8tNSmYir6Fu3QGzng";

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    company: "",
    contact_method: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ open: false, type: "success", msg: "" });

  // NEW: show errors only after user tries to submit
  const [showErrors, setShowErrors] = useState(false);

  // Refs to scroll to the first invalid field after submit
  const refs = {
    from_name: useRef(null),
    from_email: useRef(null),
    phone: useRef(null),
    contact_method: useRef(null),
    message: useRef(null),
  };

  const errors = useMemo(() => {
    const e = {};
    if (!formData.from_name.trim()) e.from_name = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) e.from_email = "Invalid email";
    const digits = formData.phone.replace(/\D/g, "");
    if (!digits || digits.length < 7) e.phone = "Enter a valid phone";
    if (!formData.contact_method) e.contact_method = "Choose one";
    if (!formData.message.trim()) e.message = "Required";
    return e;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const v = name === "phone" ? value.replace(/[^\d+()\-\s]/g, "") : value;
    setFormData((prev) => ({ ...prev, [name]: v }));
  };

  const scrollToFirstError = () => {
    const order = ["from_name", "from_email", "phone", "contact_method", "message"];
    const first = order.find((key) => errors[key]);
    if (first && refs[first]?.current) {
      refs[first].current.scrollIntoView({ behavior: "smooth", block: "center" });
      refs[first].current.focus();
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // First time user clicks submit → reveal errors (if any)
    if (!showErrors) setShowErrors(true);

    // If invalid, stop here and show messages
    if (Object.keys(errors).length > 0) {
      scrollToFirstError();
      return;
    }

    // Valid → send
    setLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          phone: formData.phone,
          company: formData.company,
          contact_method: formData.contact_method,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setToast({ open: true, type: "success", msg: t("sentOk") || "Message sent ✅" });
      setFormData({
        from_name: "",
        from_email: "",
        phone: "",
        company: "",
        contact_method: "",
        message: "",
      });
      setShowErrors(false); // reset error visibility after successful send
    } catch (err) {
      console.error("EmailJS error:", err);
      setToast({ open: true, type: "error", msg: t("sentError") || "Sending failed ❌" });
    } finally {
      setLoading(false);
    }
  };

  // Helper: show error text only AFTER submit attempt
  const show = (field) => showErrors && !!errors[field];
  const help = (field) => (show(field) ? errors[field] : " ");

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
        />
      </Paper>

      {/* Contact Form Section */}
      <Paper
        component="form"
        onSubmit={sendEmail}
        elevation={4}
        sx={{ width: { xs: "100%", md: "40%" }, p: 3, borderRadius: 3, bgcolor: "background.paper" }}
      >
        <Typography variant="h6" sx={{ mb: 1, color: "#333366", fontWeight: 700 }}>
          Contact us
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
          We‘ll get back to you as soon as possible.
        </Typography>

        <TextField
          inputRef={refs.from_name}
          fullWidth
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          placeholder="Your Name"
          margin="normal"
          variant="outlined"
          required
          error={show("from_name")}
          helperText={help("from_name")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          inputRef={refs.from_email}
          fullWidth
          name="from_email"
          type="email"
          value={formData.from_email}
          onChange={handleChange}
          placeholder="Email"
          margin="normal"
          variant="outlined"
          required
          error={show("from_email")}
          helperText={help("from_email")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          inputRef={refs.phone}
          fullWidth
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone number (incl. country code)"
          margin="normal"
          variant="outlined"
          required
          error={show("phone")}
          helperText={help("phone")}
          inputProps={{ inputMode: "tel" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Phone />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company (optional)"
          margin="normal"
          variant="outlined"
          helperText=" "
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Business />
              </InputAdornment>
            ),
          }}
        />

        <FormControl
          fullWidth
          margin="normal"
          required
          error={show("contact_method")}
          inputRef={refs.contact_method}
        >
          <Select
            name="contact_method"
            value={formData.contact_method}
            onChange={handleChange}
            displayEmpty
            renderValue={(val) => (val ? val : "Preferred contact method")}
            sx={{ ".MuiSelect-select": { display: "flex", alignItems: "center", gap: 1 } }}
          >
            <MenuItem value="">
              <em>Preferred contact method</em>
            </MenuItem>
            <MenuItem value="email">Email</MenuItem>
            <MenuItem value="phone">Phone</MenuItem>
            <MenuItem value="whatsapp">WhatsApp</MenuItem>
          </Select>
          <FormHelperText>{help("contact_method")}</FormHelperText>
        </FormControl>

        <TextField
          inputRef={refs.message}
          fullWidth
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help?"
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
          required
          error={show("message")}
          helperText={help("message")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ alignSelf: "flex-start", mt: 1 }}>
                <Chat />
              </InputAdornment>
            ),
          }}
        />

        <Divider sx={{ my: 2 }} />

        <Button
          type="submit"
          disabled={loading}
          variant="contained"
          fullWidth
          sx={{
            mt: 1,
            backgroundColor: "#333366",
            borderRadius: 2,
            py: 1.2,
            textTransform: "none",
            fontWeight: 700,
            boxShadow: "0 8px 24px rgba(51, 51, 102, 0.25)",
            "&:hover": { backgroundColor: "#2b2b66" },
          }}
        >
          {loading ? "Sending..." : "Send message"}
        </Button>
      </Paper>

      <Snackbar
        open={toast.open}
        autoHideDuration={3500}
        onClose={() => setToast((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setToast((s) => ({ ...s, open: false }))}
          severity={toast.type}
          sx={{ width: "100%" }}
        >
          {toast.msg}
        </Alert>
      </Snackbar>
    </Box>
  );
}
