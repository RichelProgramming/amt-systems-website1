import { Typography, Grid } from '@mui/material';
import React from 'react';
import { Check } from 'lucide-react';
import HexagonalDesign from './Hexagone';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

const AMTSystemsDesign = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p className='title-text-color'> 
        {t("whyChoose.title")}
      </p>
    
    <div style={{
      height: 'auto',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      <div className="why-choose-content" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: '60px',
        flexWrap: 'wrap',
      }}>
        {/* Section illustration isométrique */}
        <div className="why-choose-illustration" style={{
          flex: '1',
          minWidth: '320px',
          position: 'relative',
          height: 'auto',
          paddingRight: '50px',
        }}>
          <HexagonalDesign />
        </div>

        {/* Section contenu */}
        <div className="why-choose-text" style={{
          flex: '1',
          minWidth: '400px',
          maxWidth: '600px',
          paddingRight: '20px',
        }}>
          <Grid item xs={12} md={6}>
          <Typography variant="body1" paragraph>
            {t("whyChoose.excellence")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("whyChoose.sustainable")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("whyChoose.attentive")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("whyChoose.approach")}
          </Typography>
          <Typography variant="body1">
            {t("whyChoose.dna")}
          </Typography>
        </Grid>

        </div>
      </div>

      {/* Styles responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="gap: 60px"] {
            gap: 30px !important;
            flex-direction: column;
          }
          
          .why-choose-illustration,
          .why-choose-text {
            min-width: 0 !important;
            width: 100%;
            max-width: 100%;
          }

          .why-choose-illustration {
            padding-right: 0 !important;
          }
          
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="padding: 20px"] {
            padding: 15px !important;
          }
        }
      `}</style>
    </div>
    </div>
  );
};

export default AMTSystemsDesign;