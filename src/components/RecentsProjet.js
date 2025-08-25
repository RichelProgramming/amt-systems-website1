import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion } from 'framer-motion';
import s1 from '../assets/service.png'; // Assurez-vous que le chemin est correct

const projects = [
  {
    title: "eCommerce Website",
    type: "Web Project",
    image: s1, // Remplace par l'image dans /public
  },
  {
    title: "Banking System",
    type: "Mobile App",
    image: s1,
  },
  {
    title: "Payment Gateway",
    type: "Software",
    image: s1,
  },
];

const ProjectsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 6 },
        backgroundColor: '#333366',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <p className='title-text-white' style={{ marginBottom: isMobile ? 20 : 40 }}>
          PROJETS RECENTS
        </p>

        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          A skilled team of experts with a focus on transforming local needs into smart solutions
        </Typography>

        <Typography variant="body2" sx={{ mb: 5, maxWidth: 700, mx: 'auto', color: '#ccc' }}>
          From brand development, website application development, eCommerce solutions,
          Content Management Systems (CMS), Search Engine Optimization (SEO) and digital marketing.
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card sx={{ maxWidth: 345, mx: 'auto' }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'contain', p: 2 }}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" fontWeight="bold">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.type}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsSection;
