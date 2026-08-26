import React from 'react';
import { motion } from 'framer-motion';

export default function PerspectivesHero() {
  const curveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.6,
      transition: {
        duration: 2,
        ease: 'easeInOut'
      }
    }
  };

  const overlayVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 1,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '600px',
      overflow: 'hidden',
      backgroundColor: '#f5f5f5'
    }}>
      {/* Image de fond avec buildings */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=600&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1
      }}>
        {/* Overlay gradient pour améliorer la lisibilité */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)'
        }} />
      </div>

      {/* Courbes SVG décoratives */}
      <svg 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none'
        }}
        viewBox="0 0 1920 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M 0 350 Q 400 280 800 320 T 1600 350"
          stroke="white"
          strokeWidth="3"
          fill="none"
          variants={curveVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M 600 250 Q 900 200 1200 250 T 1920 300"
          stroke="white"
          strokeWidth="2"
          fill="none"
          variants={curveVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        />
      </svg>

      {/* Overlay bleu avec titre "Perspectives" */}
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          maxWidth: '600px',
          height: '100%',
          background: 'linear-gradient(135deg, #333366 0%, #33336687 100%)',
          display: 'flex',
          alignItems: 'center',
          padding: '3rem',
          zIndex: 3,
          clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)'
        }}
      >
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={{
            color: 'white',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            margin: 0,
            letterSpacing: '-0.02em',
            textShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}
        >
          Perspectives
        </motion.h1>
      </motion.div>

      {/* Texte descriptif en bas */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 5vw, 3rem)',
        zIndex: 4
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <motion.p
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              lineHeight: '1.6',
              color: '#333',
              margin: 0,
              fontWeight: 400
            }}
          >
            Découvrez nos derniers points de vue, réflexions et visions sur les questions qui façonnent l'avenir des entreprises et de la société.
          </motion.p>
        </div>
      </div>

      {/* Séparateur décoratif entre l'image et le texte */}
      <svg 
        style={{
          position: 'absolute',
          bottom: 'clamp(120px, 20vw, 150px)',
          left: 0,
          width: '100%',
          height: '80px',
          zIndex: 3,
          pointerEvents: 'none'
        }}
        viewBox="0 0 1920 80"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 0 40 Q 480 10 960 40 T 1920 40 L 1920 80 L 0 80 Z"
          fill="rgba(255, 255, 255, 0.98)"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </svg>

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="clipPath"] {
            clip-path: polygon(0 0, 100% 0, 95% 100%, 0 100%) !important;
            max-width: 100% !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="clipPath"] {
            clip-path: none !important;
            background: linear-gradient(135deg, rgba(0, 115, 169, 0.95) 0%, rgba(150, 14, 96, 0.92) 100%) !important;
          }
        }
      `}</style>
    </div>
  );
}