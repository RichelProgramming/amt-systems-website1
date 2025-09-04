
import s1 from '../assets/service.png'; 
import React from 'react';
import { Check } from 'lucide-react';

const AMTSystemsDesign = () => {
  const services = [
    { text: "Web & Mobile App", checked: true },
    { text: "eCommerce Websites", checked: true },
    { text: "SEO & Digital Marketing", checked: true },
    { text: "Graphic Design & Branding", checked: true },
    { text: "Software Development", checked: true },
    { text: "System development", checked: true }
  ];

  return (
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
          <img src={s1} alt="Project" style={{ width: '90%', height: '100%' }} />
        </div>

        {/* Section contenu */}
        <div style={{
          flex: '1',
          minWidth: '400px',
          maxWidth: '600px',
        }}>
          {/* En-tête */}
          <div style={{
            color: '#3b82f6',
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            ABOUT US
          </div>

          {/* Titre principal */}
          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '24px',
            lineHeight: '1.2',
          }}>
            AMT Systems engineering
          </h1>

          {/* Description */}
          <p style={{
            fontSize: '16px',
            color: '#6b7280',
            lineHeight: '1.6',
            marginBottom: '32px',
          }}>
            We are AMT, a technology company based in Douala, Cameroon, rooted in{' '}
            <span style={{ fontWeight: '600', color: '#1f2937' }}>innovation</span>,{' '}
            <span style={{ fontWeight: '600', color: '#1f2937' }}>systems</span>,{' '}
            <span style={{ fontWeight: '600', color: '#1f2937' }}>thinking</span> and{' '}
            <span style={{ fontWeight: '600', color: '#1f2937' }}>impact</span>. We combine{' '}
            <span style={{ fontWeight: '600', color: '#1f2937' }}>software</span>,{' '}
            <span style={{ fontWeight: '600', color: '#1f2937' }}>hardware</span>,{' '}
            <span style={{ fontWeight: '600', color: '#1f2937' }}>AI</span> and{' '}
            <span style={{ fontWeight: '600', color: '#1f2937' }}>mechanics</span>{' '}
            to create integrated solutions.
          </p>

          {/* Grille des services */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px',
            marginBottom: '32px',
          }}>
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                  e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Check size={12} color="white" strokeWidth={3} />
                </div>
                <span style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                }}>
                  {service.text}
                </span>
              </div>
            ))}
          </div>

          {/* Bouton CTA */}
          <button
            style={{
              backgroundColor: '#1e40af',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '6px',
              border: 'none',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#1e3a8a';
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 4px 12px rgba(30, 64, 175, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#1e40af';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            More About Us
          </button>
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
  );
};

export default AMTSystemsDesign;