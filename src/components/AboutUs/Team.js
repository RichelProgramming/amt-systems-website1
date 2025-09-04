import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Avatar,
  useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import '../../App.css';
import s1 from '../../assets/1.png'; 
import s2 from '../../assets/2.png'; 
import s3 from '../../assets/3.png'; 
import s4 from '../../assets/4.png'; 

const teamMembers = [
  {
    name: "Paul Arolle",
    role: "Software Developer",
    title: "CEO & Founder",
    img: s1,
    portfolio: "#",
    linkedin: "#",
    titleColor: "green"
  },
  {
    name: "Luc Israël",
    role: "Flutter Developer",
    title: "Lead",
    img: s2,
    portfolio: "#",
    linkedin: "#"
  },
  {
    name: "Pierre Wafo",
    role: "Fullstack Developer",
    title: "Founder",
    img: s3,
    portfolio: "#",
    linkedin: "#"
  },
  {
    name: "Lac Maxime",
    role: "Fullstack Developer",
    title: "COFounder",
    img: s4,
    portfolio: "#",
    linkedin: "#"
  }
];

const TeamSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: "1200px", margin: "0 auto" }}>
      <p className='title-text-color'>Teams Workers</p>
      <p style={{padding:'20px 0px 40px 0px',textAlign:"center"}}>Discovers a dynamic person in our </p>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                textAlign: "center",
                borderRadius: 3,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                p: 2
              }}
            >
              <Avatar
                src={member.img}
                alt={member.name}
                sx={{
                  width: isMobile ? 80 : 100,
                  height: isMobile ? 80 : 100,
                  margin: "0 auto",
                  mb: 2
                }}
              />
              <CardContent>
                {member.title && (
                  <Typography
                    variant="subtitle2"
                    sx={{ color: member.titleColor || "primary.main", fontWeight: "bold" }}
                  >
                    {member.title}
                  </Typography>
                )}
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", mt: member.title ? 1 : 0 }}
                >
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: "center",
                  gap: 1,
                  pb: 2
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "#0b3d91",
                    borderRadius: "20px",
                    textTransform: "none"
                  }}
                  href={member.portfolio}
                >
                  Portfolio
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "#0b3d91",
                    borderRadius: "20px",
                    textTransform: "none"
                  }}
                  href={member.linkedin}
                >
                  Linkedin
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamSection;
