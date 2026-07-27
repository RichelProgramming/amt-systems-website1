import React from 'react';
import { useTranslation } from 'react-i18next';

const HexagonalDesign = () => {
  const { t } = useTranslation();
  
  // Styles CSS pour les hexagones
  const hexagonStyle = {
    width: '120px',
    height: '104px', // 120 * 0.866 pour ratio hexagonal
    position: 'relative',
    margin: '0 auto',
    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '11px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    lineHeight: '1.1',
    padding: '0 8px',
    boxSizing: 'border-box',
  };

  const centralHexagonStyle = {
    ...hexagonStyle,
    width: '140px',
    height: '121px',
    backgroundColor: '#4A90E2',
    fontSize: '12px',
    flexDirection: 'column',
    gap: '4px',
    zIndex: 2,
  };

  const mobileHexagonStyle = {
    ...hexagonStyle,
    width: '80px',
    height: '69px',
    fontSize: '9px',
    padding: '0 4px',
  };

  const mobileCentralStyle = {
    ...centralHexagonStyle,
    width: '100px',
    height: '87px',
    fontSize: '10px',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
    margin:'center',
    overflow: 'hidden',
  };

  const hexagonContainerStyle = {
    position: 'relative',
    width: '400px',
    height: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const mobileContainerStyle = {
    ...hexagonContainerStyle,
    width: '280px',
    height: '280px',
  };

  const handshakeIcon = (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="white" style={{ marginBottom: '2px' }}>
      <path d="M7.05 14.121L4.93 16.243C4.539 16.634 4.539 17.268 4.93 17.659C5.32 18.05 5.954 18.05 6.345 17.659L8.465 15.535C8.856 15.144 8.856 14.511 8.465 14.121C8.074 13.732 7.441 13.732 7.05 14.121ZM17.657 6.343L15.535 8.465C15.144 8.856 14.511 8.856 14.121 8.465C13.732 8.074 13.732 7.441 14.121 7.05L16.243 4.929C16.634 4.538 17.268 4.538 17.659 4.929C18.05 5.32 18.05 5.954 17.657 6.343ZM12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H20L19 8H17L16 9H14L13 8L12 9L11 8L10 9H8L7 8H5L4 9H3C2.45 9 2 9.45 2 10V20C2 20.55 2.45 21 3 21H21C21.55 21 22 20.55 22 20V10C22 9.45 21.55 9 21 9Z"/>
    </svg>
  );

  const mobileHandshakeIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style={{ marginBottom: '2px' }}>
      <path d="M7.05 14.121L4.93 16.243C4.539 16.634 4.539 17.268 4.93 17.659C5.32 18.05 5.954 18.05 6.345 17.659L8.465 15.535C8.856 15.144 8.856 14.511 8.465 14.121C8.074 13.732 7.441 13.732 7.05 14.121ZM17.657 6.343L15.535 8.465C15.144 8.856 14.511 8.856 14.121 8.465C13.732 8.074 13.732 7.441 14.121 7.05L16.243 4.929C16.634 4.538 17.268 4.538 17.659 4.929C18.05 5.32 18.05 5.954 17.657 6.343ZM12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H20L19 8H17L16 9H14L13 8L12 9L11 8L10 9H8L7 8H5L4 9H3C2.45 9 2 9.45 2 10V20C2 20.55 2.45 21 3 21H21C21.55 21 22 20.55 22 20V10C22 9.45 21.55 9 21 9Z"/>
    </svg>
  );

  // Détection mobile basique
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const hexagons = [
    {
      id: 'customer',
      text: t('hexagone.customer') + '\n' + t('hexagone.userJourney'),
      color: '#E67E22',
      position: { 
        top: isMobile ? '15px' : '25px', 
        left: '50%', 
        transform: 'translateX(-50%)' 
      }
    },
    {
      id: 'business',
      text: t('hexagone.leading') + '\n' + t('hexagone.business'),
      color: '#D4A832',
      position: { 
        top: isMobile ? '60px' : '90px', 
        right: isMobile ? '20px' : '30px' 
      }
    },
    {
      id: 'deployment',
      text: t('hexagone.quality') + '\n' + t('hexagone.functional') + '\n' + t('hexagone.deployment'),
      color: '#9BC53D',
      position: { 
        bottom: isMobile ? '60px' : '85px', 
        right: isMobile ? '15px' : '30px' 
      }
    },
    {
      id: 'implementation',
      text: t('hexagone.ux') + '\n' + t('hexagone.implementation'),
      color: '#7CB342',
      position: { 
        bottom: isMobile ? '15px' : '25px', 
        left: '50%', 
        transform: 'translateX(-50%)' 
      }
    },
    {
      id: 'delivery',
      text: t('hexagone.delivery') + '\n' + t('hexagone.release'),
      color: '#2E7D32',
      position: { 
        bottom: isMobile ? '60px' : '90px', 
        left: isMobile ? '20px' : '30px' 
      }
    },
    {
      id: 'feedback',
      text: 'Feedback\n&\nContinuous\nimprovement',
      color: '#388E3C',
      position: { 
        top: isMobile ? '55px' : '80px', 
        left: isMobile ? '25px' : '35px' 
      }
    }
  ];

  const handleHexagonHover = (e) => {
    e.currentTarget.style.transform = e.currentTarget.style.transform.includes('translateX') 
      ? e.currentTarget.style.transform.replace(')', ' scale(1.1))')
      : 'scale(1.1)';
    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
  };

  const handleHexagonLeave = (e) => {
    e.currentTarget.style.transform = e.currentTarget.style.transform.includes('translateX')
      ? e.currentTarget.style.transform.replace(' scale(1.05)', '')
      : 'scale(1)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <div style={containerStyle}>
      <div style={isMobile ? mobileContainerStyle : hexagonContainerStyle}>
        {/* Hexagone central */}
        <div
          style={isMobile ? mobileCentralStyle : centralHexagonStyle}
          onMouseEnter={handleHexagonHover}
          onMouseLeave={handleHexagonLeave}
        >
          {isMobile ? mobileHandshakeIcon : handshakeIcon}
          <span>Value contribution</span>
        </div>

        {/* Hexagones périphériques */}
        {hexagons.map((hexagon) => (
          <div
            key={hexagon.id}
            style={{
              position: 'absolute',
              ...hexagon.position,
              zIndex: 1,
            }}
          >
            <div
              style={{
                ...(isMobile ? mobileHexagonStyle : hexagonStyle),
                backgroundColor: hexagon.color,
              }}
              onMouseEnter={handleHexagonHover}
              onMouseLeave={handleHexagonLeave}
            >
              <span style={{ whiteSpace: 'pre-line' }}>
                {hexagon.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HexagonalDesign;