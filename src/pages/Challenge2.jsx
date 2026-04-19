import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PillNav from '../components/PillNav'
import HeroSectionV2 from '../components/heroSectionV2'
import bgLight from '../assets/background.jpg'
import bgDark from '../assets/backgroundDark.jpg'
import logo from '../assets/logoNav.png'

export default function Challenge2() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [language, setLanguage] = useState('en')

  const toggleDarkMode = () => setIsDarkMode(prev => !prev)
  const toggleLanguage = () => setLanguage(prev => prev === 'en' ? 'fr' : 'en')

  const navItems = {
    en: [
      { label: 'About', href: '/about' },
      { label: 'Features', href: '/features' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
    fr: [
      { label: 'À propos', href: '/about' },
      { label: 'Fonctionnalités', href: '/features' },
      { label: 'Intégrations', href: '/integrations' },
      { label: 'Tarification', href: '/pricing' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ]
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
        <motion.div
          initial={false}
          animate={{ opacity: isDarkMode ? 0 : 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${bgLight})`,
            backgroundSize: 'cover',
            backgroundPosition: '200px right',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <motion.div
          initial={false}
          animate={{ opacity: isDarkMode ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${bgDark})`,
            backgroundSize: 'cover',
            backgroundPosition: '200px right',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <PillNav
          logo={logo}
          logoAlt="Vaulta Logo"
          items={navItems[language]}
          activeHref="/about"
          className="challenge2-nav"
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          language={language}
          toggleLanguage={toggleLanguage}
          initialLoadAnimation={true}
          companyName="Vaulta"
          invertLogoOnLight={false}
        />
        <main>
          <HeroSectionV2 isDarkMode={isDarkMode} language={language} />
        </main>
      </div>
    </div>
  )
}
