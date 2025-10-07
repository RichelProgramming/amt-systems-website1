import React from 'react';
import { motion } from 'framer-motion';

export default function CapgeminiInfoSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.3,
      transition: {
        duration: 2,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div style={{
      position: 'relative',
      padding: '4rem 1rem',
      overflow: 'hidden',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      {/* SVG Curves décoratives */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0
      }}>
        <svg width="100%" height="100%" style={{ position: 'absolute' }}>
          <motion.path
            d="M 0 300 Q 600 100 1200 350"
            stroke="#333366"
            strokeWidth="2"
            fill="none"
            variants={curveVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M 400 150 Q 800 400 1600 200"
            stroke="#333366"
            strokeWidth="2"
            fill="none"
            variants={curveVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          />
        </svg>
      </div>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '3rem' }}
        >
          <h1 style={{
            fontWeight: 600,
            fontSize: 'clamp(1.75rem, 5vw, 3rem)',
            color: '#333',
            margin: 0
          }}>
            Découvrez nos derniers tendances et ressources
          </h1>
        </motion.div>

        {/* Grille de contenu */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            alignItems: 'stretch'
          }}
        >
          {/* Notre groupe */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            style={{
              background: 'linear-gradient(135deg, #0073A9 0%, #005780 100%)',
              color: 'white',
              minHeight: '320px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              padding: '2rem',
              cursor: 'pointer'
            }}
          >
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '2rem',
              marginTop: 0
            }}>
              Notre groupe
            </h2>
            <button style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'white',
              backgroundColor: 'transparent',
              border: '2px solid white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 500,
              cursor: 'pointer',
              alignSelf: 'flex-start',
              transition: 'all 0.3s ease'
            }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Découvrir
              <span style={{ fontSize: '1.2rem' }}>→</span>
            </button>
          </motion.div>

          {/* Dernier rapport annuel */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            style={{
              minHeight: '320px',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: 'white',
              cursor: 'pointer'
            }}
          >
            {/* Image de fond */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '60%',
              backgroundImage: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 25%, #4ecdc4 75%, #44a08d 100%)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 100%)'
              }} />
            </div>
            
            <div style={{
              marginTop: 'auto',
              padding: '2rem',
              position: 'relative',
              zIndex: 1,
              backgroundColor: 'white'
            }}>
              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: '#333',
                marginTop: 0
              }}>
                Dernier rapport annuel
              </h2>
              
              <button style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                color: '#0073A9',
                backgroundColor: 'transparent',
                border: 'none',
                padding: 0,
                fontSize: '1rem',
                cursor: 'pointer',
                textAlign: 'left',
                fontWeight: 500
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <div>
                  <div style={{ fontWeight: 500 }}>
                    Télécharger le rapport annuel
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.25rem' }}>
                    15 MB PDF
                  </div>
                </div>
              </button>
            </div>
          </motion.div>

          {/* Site investisseurs */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            style={{
              background: 'linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)',
              color: 'white',
              minHeight: '320px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              padding: '2rem',
              cursor: 'pointer'
            }}
          >
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '2rem',
              marginTop: 0
            }}>
              Site investisseurs
            </h2>
            <button style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'white',
              backgroundColor: 'transparent',
              border: '2px solid white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 500,
              cursor: 'pointer',
              alignSelf: 'flex-start',
              transition: 'all 0.3s ease'
            }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Voir le site
              <span style={{ fontSize: '1.2rem' }}>→</span>
            </button>
          </motion.div>

          {/* Nouveau motion.div 1 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            style={{
              background: 'linear-gradient(135deg, #FFB347 0%, #FFCC33 100%)',
              color: '#333',
              minHeight: '320px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              padding: '2rem',
              cursor: 'pointer'
            }}
          >
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '2rem',
              marginTop: 0
            }}>
              Ressource 1
            </h2>
            <button style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#333',
              backgroundColor: 'transparent',
              border: '2px solid #333',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 500,
              cursor: 'pointer',
              alignSelf: 'flex-start',
              transition: 'all 0.3s ease'
            }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.05)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Découvrir
              <span style={{ fontSize: '1.2rem' }}>→</span>
            </button>
          </motion.div>

          {/* Nouveau motion.div 2 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            style={{
              background: 'linear-gradient(135deg, #8E54E9 0%, #4776E6 100%)',
              color: 'white',
              minHeight: '320px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              padding: '2rem',
              cursor: 'pointer'
            }}
          >
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '2rem',
              marginTop: 0
            }}>
              Ressource 2
            </h2>
            <button style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'white',
              backgroundColor: 'transparent',
              border: '2px solid white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 500,
              cursor: 'pointer',
              alignSelf: 'flex-start',
              transition: 'all 0.3s ease'
            }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Découvrir
              <span style={{ fontSize: '1.2rem' }}>→</span>
            </button>
          </motion.div>

          {/* Nouveau motion.div 3 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            style={{
              background: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
              color: 'white',
              minHeight: '320px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              padding: '2rem',
              cursor: 'pointer'
            }}
          >
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '2rem',
              marginTop: 0
            }}>
              Ressource 3
            </h2>
            <button style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'white',
              backgroundColor: 'transparent',
              border: '2px solid white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 500,
              cursor: 'pointer',
              alignSelf: 'flex-start',
              transition: 'all 0.3s ease'
            }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Découvrir
              <span style={{ fontSize: '1.2rem' }}>→</span>
            </button>
          </motion.div>
        </motion.div>
        {/* Responsive CSS */}
        <style>
          {`
            @media (max-width: 1024px) {
              div[style*="grid-template-columns"] {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }
            @media (max-width: 700px) {
              div[style*="grid-template-columns"] {
                grid-template-columns: 1fr !important;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
}