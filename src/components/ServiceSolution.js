import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import s1 from '../assets/service.png';
import CustumTitle from './CustumTitle';

const highlights = [
  {
    title: "Professionals",
    description: "Our team has more than 4 years of experience in the society. We are engaged in our work.",
    image: s1,
  },
  {
    title: "We Deliver",
    description: "We make sure we always deliver on time. We are committed to building a reliable brand.",
    image: s1,
  },
  {
    title: "Young & Ambitious",
    description: "The company is managed by young people. We set the tone. You can count on us in a long run.",
    image: s1,
  },
  {
    title: "Cost-Effective",
    description: "We are highly affordable, our rates are perfect to fit in any formats, with no hidden costs.",
    image: s1,
  },
];

const WhyChooseUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 6 },
        backgroundColor: '#f0f6fb',
        textAlign: 'center',
      }}
    >
      <CustumTitle title="Why should we consider for your solutions services?" />
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 6 }}>
         <strong style={{ color: '#000' }}>AMT</strong> 
      </Typography>

      <Grid container justifyContent="center" spacing={4}>
        {highlights.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                    backgroundColor: '#ffffff',
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: '100%',
                    height: 120,
                    objectFit: 'contain',
                    mb: 2,
                  }}
                />
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
