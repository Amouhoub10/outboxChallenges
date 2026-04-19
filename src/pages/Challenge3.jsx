import { useState } from 'react'
import PillNav from '../components/PillNav'
import logo from '../assets/Logo2.png'
import bgDark from '../assets/bgChallenge3.jpg'
import bgLight from '../assets/bgchallenge3Light.jpg'
import phone1 from '../assets/phone1.png'
import phone2 from '../assets/phone2.png'
import phone3 from '../assets/phone3.png'
import { motion } from 'framer-motion'

export default function Challenge3() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [language, setLanguage] = useState('en')

  const toggleDarkMode = () => setIsDarkMode(prev => !prev)
  const toggleLanguage = () => setLanguage(prev => prev === 'en' ? 'fr' : 'en')

  const navItems = {
    en: [
      { label: 'About', href: '/' },
      { label: 'How it works', href: '' },
      { label: 'Pricing', href: '' },
      { label: 'Contact', href: '' },
    ],
    fr: [
      { label: 'À propos', href: '/' },
      { label: 'Comment ça marche', href: '' },
      { label: 'Tarifs', href: '' },
      { label: 'Contact', href: '' },
    ]
  }

  const textColor = isDarkMode ? '#ffffff' : '#000000';
  const subtextColor = isDarkMode ? '#f3f4f6' : '#4B5563';
  const spanColor = isDarkMode ? '#D4AF37' : '#B8860B';
  const currentBg = isDarkMode ? bgDark : bgLight;

  const content = {
    en: {
      title: <>Make <span style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', fontWeight: '400', color: spanColor, transition: 'color 0.4s ease-in-out' }}>smarter</span> decisions <br /> with real-time insights</>,
      subtitle: "Monitor your sales, revenue, and business growth through a powerful and intuitive analytics dashboard.",
      cta: "Start Tracking Now"
    },
    fr: {
      title: <>Décidez <span style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', fontWeight: '400', color: spanColor, transition: 'color 0.4s ease-in-out' }}>mieux</span> <br /> en temps réel</>,
      subtitle: "Exploitez la puissance des données en temps réel pour suivre vos performances, vos revenus et votre croissance globale.",
      cta: "Commencer le suivi"
    }
  };

  return (
    <div style={{
      backgroundImage: `url(${currentBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100vw',
      color: textColor,
      fontFamily: 'Inter, sans-serif',
      transition: 'all 0.4s ease-in-out',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }}>
      <PillNav
        logo={logo}
        logoAlt="Vaulta Logo"
        items={navItems[language]}
        activeHref="/"
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        language={language}
        toggleLanguage={toggleLanguage}
        initialLoadAnimation={true}
        companyName="FlowMetrics"
        getStartedStyle={{
          background: isDarkMode ? 'linear-gradient(180deg, #ffffff 0%, #e5e7eb 100%)' : '#000000',
          color: isDarkMode ? '#111827' : '#ffffff',
          boxShadow: isDarkMode ? '0 4px 14px rgba(0,0,0,0.1)' : 'none'
        }}
      />

      <main style={{
        padding: '60px 24px 0',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 2
      }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: 'Inter',
            color: textColor,
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: '900',
            lineHeight: '1.1',
            marginBottom: '20px',
            marginTop: 0,
            letterSpacing: '-0.05em',
            transition: 'color 0.4s ease-in-out'
          }}>
          {content[language].title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: 'Inter',
            fontSize: '1.2rem',
            color: subtextColor,
            lineHeight: '1.6',
            fontWeight: '400',
            maxWidth: '600px',
            margin: '0 auto 30px',
            transition: 'color 0.4s ease-in-out'
          }}>
          {content[language].subtitle}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #e5e7eb 100%)',
            color: '#111827',
            border: 'none',
            padding: '12px 32px',
            borderRadius: '999px',
            fontSize: '1rem',
            fontWeight: '600',
            fontFamily: 'Inter',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
            marginBottom: '20px',
          }}
        >
          {content[language].cta}
        </motion.button>
      </main>

      <div style={{
        position: 'absolute',
        bottom: '-250px',
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        pointerEvents: 'none',
        zIndex: 1
      }}>

        <motion.div
          initial={{ y: 800, opacity: 0, rotate: -5 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginRight: '-100px', marginBottom: '140px' }}
        >
          <motion.img
            src={phone1}
            alt="Phone 1"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.8 }}
            style={{
              height: 'clamp(400px, 55vh, 550px)',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
            }}
          />
        </motion.div>


        <motion.div
          initial={{ y: 800, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ zIndex: 3 }}
        >
          <motion.img
            src={phone2}
            alt="Phone 2"
            animate={{ y: [0, -25, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2.0 }}
            style={{
              height: 'clamp(400px, 70vh, 400px)',
              filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.5))',
              marginBottom: '60px'
            }}
          />
        </motion.div>


        <motion.div
          initial={{ y: 800, opacity: 0, rotate: 5 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginLeft: '-100px', marginBottom: '140px' }}
        >
          <motion.img
            src={phone3}
            alt="Phone 3"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 2.2 }}
            style={{
              height: 'clamp(400px, 55vh, 550px)',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}
