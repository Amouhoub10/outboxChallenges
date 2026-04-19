import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function PillNav({
  logo,
  logoAlt = 'Logo',
  items = [],
  activeHref = '/',
  className = '',
  baseColor,
  pillColor,
  pillTextColor,
  hoveredPillTextColor,
  theme = 'light',
  isDarkMode = false,
  toggleDarkMode,
  language = 'en',
  toggleLanguage,
  initialLoadAnimation = true,
  companyName = 'Vaulta',
  getStartedStyle = {},
  invertLogoOnLight = true,
}) {
  const resolvedDark = isDarkMode || theme === 'dark';

  const bg = resolvedDark ? 'rgba(10, 10, 10, 0.85)' : 'rgba(255, 255, 255, 0.75)';
  const border = resolvedDark ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.60)';
  const pill = pillColor || (resolvedDark ? '#ffffff' : '#111827');
  const pillTxt = pillTextColor || (resolvedDark ? '#111827' : '#ffffff');
  const baseText = resolvedDark ? '#D1D5DB' : '#6B7280';
  const hoverTxt = hoveredPillTextColor || pillTxt;

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(
    () => items.findIndex(i => i.href === activeHref) ?? 0
  );

  const itemRefs = useRef([]);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  useEffect(() => {
    const el = itemRefs.current[targetIndex];
    if (el) {
      setPillStyle({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [targetIndex, items]);

  return (
    <motion.div
      initial={initialLoadAnimation ? { y: -24, opacity: 0 } : false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`pillNav-wrapper ${className}`}
      style={{
        position: 'sticky',
        top: 20,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
        marginTop: 0,
      }}
    >
      <motion.div
        animate={{ backgroundColor: bg, borderColor: border }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 10px 8px 16px',
          borderRadius: 9999,
          border: '1px solid',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: resolvedDark
            ? '0 8px 32px rgba(0,0,0,0.35)'
            : '0 8px 32px rgba(0,0,0,0.10)',
          pointerEvents: 'auto',
          position: 'relative',
        }}
      >
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginRight: 8, flexShrink: 0 }}>
          <img src={logo} alt={logoAlt} style={{ width: 36, height: 36, objectFit: 'contain', borderRadius: 8, filter: (!resolvedDark && invertLogoOnLight) ? 'invert(1) brightness(0)' : 'none' }} />
          <motion.span
            animate={{ color: resolvedDark ? '#F9FAFB' : '#111827' }}
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 18, letterSpacing: '-0.4px', whiteSpace: 'nowrap' }}
          >
            {companyName}
          </motion.span>
        </a>

        <nav
          style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            animate={{ left: pillStyle.left, width: pillStyle.width }}
            transition={{ type: 'spring', stiffness: 400, damping: 35, mass: 0.8 }}
            style={{
              position: 'absolute',
              top: 0,
              height: '100%',
              backgroundColor: pill,
              borderRadius: 9999,
              zIndex: 0,
            }}
          />

          {items.map((item, i) => {
            const isActive = i === activeIndex;
            const isHovered = i === hoveredIndex;
            const highlighted = isHovered || (hoveredIndex === null && isActive);

            return (
              <a
                key={item.href}
                ref={el => (itemRefs.current[i] = el)}
                href={item.href}
                onClick={e => { e.preventDefault(); setActiveIndex(i); }}
                onMouseEnter={() => setHoveredIndex(i)}
                style={{
                  position: 'relative',
                  zIndex: 1,
                  padding: '7px 16px',
                  borderRadius: 9999,
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 14,
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s',
                  color: highlighted ? hoverTxt : baseText,
                  cursor: 'pointer',
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 8, flexShrink: 0 }}>

          {toggleLanguage && (
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: resolvedDark ? '#D1D5DB' : '#4B5563',
                padding: '4px 8px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 13,
                borderRadius: 8,
              }}
              title="Change Language"
            >
              {language.toUpperCase()}
            </motion.button>
          )}

          {toggleDarkMode && (
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.12, rotate: resolvedDark ? 90 : -90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: resolvedDark ? '#FCD34D' : '#6B7280',
                padding: 6,
                borderRadius: '50%',
              }}
              title={resolvedDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {resolvedDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          )}

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              fontSize: 14,
              fontWeight: 600,
              padding: '8px 14px',
              color: resolvedDark ? '#E5E7EB' : '#374151',
              borderRadius: 9999,
            }}
          >
            {language === 'fr' ? 'Se connecter' : 'Sign in'}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(98,54,255,0.40)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
              color: '#fff',
              border: 'none',
              borderRadius: 9999,
              padding: '8px 18px',
              fontFamily: 'Inter, sans-serif',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              ...getStartedStyle
            }}
          >
            {language === 'fr' ? 'Commencer' : 'Get started'}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
