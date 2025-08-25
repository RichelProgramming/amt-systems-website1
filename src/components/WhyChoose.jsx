import React from "react";
import { Box, Grid, Typography, Paper, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const WhyChoose = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const hexagons = [
    { text: "Customer/ User journey", color: "#e67e22" },
    { text: "Leading my Business", color: "#f1c40f" },
    { text: "Quality functional deployment", color: "#cddc39" },
    { text: "UX-Implementation", color: "#4caf50" },
    { text: "Delivery & release", color: "#2e7d32" },
    { text: "Feedback & Continuous improvement", color: "#388e3c" },
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: "1200px", margin: "0 auto" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Titre et contenu */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom color="primary">
            Why to choose AMT Systems – Engineering SARL as your business partner?
          </Typography>
          <Typography variant="body1" paragraph>
            Delivering products is important, but excellence means more than just fulfilling the explicit needs of our customers.
          </Typography>
          <Typography variant="body1" paragraph>
            Creating <strong>sustainable</strong> value requests more than technical resolution of the challenges.
          </Typography>
          <Typography variant="body1" paragraph>
            To achieve this, AMT systems–Engineering SARL remains attentive to the real challenges the customer face in their ecosystem.
          </Typography>
          <Typography variant="body1" paragraph>
            This customer-centric and user-focused approach prioritizes exceptional customer service by delivering tailored solutions that meet all stakeholders' needs.
          </Typography>
          <Typography variant="body1">
            This our DNA.
          </Typography>
        </Grid>

        {/* Diagramme hexagonal */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {hexagons.map((hex, index) => (
              <Paper
                key={index}
                sx={{
                  width: isMobile ? 120 : 140,
                  height: isMobile ? 100 : 120,
                  clipPath:
                    "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                  backgroundColor: hex.color,
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  p: 2,
                  fontWeight: "bold",
                }}
              >
                <Typography variant="body2" sx={{ fontSize: isMobile ? "0.75rem" : "0.85rem" }}>
                  {hex.text}
                </Typography>
              </Paper>
            ))}

            {/* Hexagone central */}
            <Paper
              sx={{
                width: isMobile ? 130 : 150,
                height: isMobile ? 110 : 130,
                clipPath:
                  "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                backgroundColor: "#3498db",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                p: 2,
                fontWeight: "bold",
              }}
            >
              <Typography variant="body1" sx={{ fontSize: isMobile ? "0.85rem" : "1rem" }}>
                Value contribution
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChoose;
