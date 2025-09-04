import { Typography, Grid } from '@mui/material';
import React from 'react';
import { Check } from 'lucide-react';
import HexagonalDesign from './Hexagone';
import { i } from 'motion/react-client';

const AMTSystemsDesign = () => {

  return (
    <div>
      <p className='title-text-color'> 
        Why to choose AMT  Systems-Engineering <br/>
        SARL as your business partner
      </p>
    
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'white',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: '60px',
        flexWrap: 'wrap',
      }}>
        {/* Section illustration isométrique */}
        <div style={{
          flex: '1',
          minWidth: '320px',
          position: 'relative',
          height: '500px',
        }}>
          <HexagonalDesign />
        </div>

        {/* Section contenu */}
        <div style={{
          flex: '1',
          minWidth: '400px',
          maxWidth: '600px',
        }}>
          <Grid item xs={12} md={6}>
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

        </div>
      </div>

      {/* Styles responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="gap: 60px"] {
            gap: 30px !important;
            flex-direction: column;
          }
          
          div[style*="minWidth: 400px"] {
            min-width: 300px !important;
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