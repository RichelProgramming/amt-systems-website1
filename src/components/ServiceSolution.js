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
import { useTranslation } from 'react-i18next';
import s1 from '../assets/service.png';
import CustumTitle from './CustumTitle';

const WhyChooseUs = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const highlights = [
    {
      title: t("serviceSolution.professionals.title"),
      description: t("serviceSolution.professionals.desc"),
      image: s1,
    },
    {
      title: t("serviceSolution.deliver.title"),
      description: t("serviceSolution.deliver.desc"),
      image: s1,
    },
    {
      title: t("serviceSolution.youngAmbitious.title"),
      description: t("serviceSolution.youngAmbitious.desc"),
      image: s1,
    },
    {
      title: t("serviceSolution.costEffective.title"),
      description: t("serviceSolution.costEffective.desc"),
      image: s1,
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 6 },
        backgroundColor: '#f0f6fb',
        textAlign: 'center',
      }}
    >
      <CustumTitle title={t("serviceSolution.title")} />
      {/* <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 6 }}>
         <strong style={{ color: '#000' }}>AMT</strong> 
      </Typography> */}

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
