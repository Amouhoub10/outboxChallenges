import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import phoneMockup from "../assets/challenge1_2/phonePic.png";

export default function HeroSectionV2({ isDarkMode, language = 'en' }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const heroTheme = {
        title: isDarkMode ? "#F9FAFB" : "#111827",
        subtitle: isDarkMode ? "#D1D5DB" : "#4B5563",
        cardBg: isDarkMode ? "rgba(20, 20, 20, 0.85)" : "rgba(255, 255, 255, 0.8)",
        cardBorder: isDarkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.5)",
        cardText: isDarkMode ? "#F9FAFB" : "#111827",
        glow: isDarkMode ? "rgba(100, 100, 100, 0.2)" : "rgba(98,54,255,1)",
        btnLearnBg: isDarkMode ? "rgba(20, 20, 20, 0.9)" : "white",
        btnLearnBorder: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 1)",
        btnLearnText: isDarkMode ? "#F9FAFB" : "#111827",
        btnLearnHover: isDarkMode ? "rgba(40, 40, 40, 1)" : "rgba(243, 244, 246, 0.8)",
    };

    return (
        <div className="heroSection" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "60px 32px", boxSizing: "border-box" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px", width: "min(50%, 560px)", minWidth: "280px", flex: "1 1 280px", paddingRight: "40px", boxSizing: "border-box" }}>
                <motion.div variants={itemVariants} animate={{ backgroundColor: heroTheme.cardBg, borderColor: heroTheme.cardBorder }} style={{ display: "flex", flexDirection: "column", gap: "2px", borderRadius: "12px", backdropFilter: "blur(10px)", border: "1px solid", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)", width: "fit-content", padding: "10px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <motion.p animate={{ color: heroTheme.cardText }} style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: "700", fontSize: "14px" }}>4.9</motion.p>
                        <div style={{ display: "flex", gap: "3px" }}>
                            {
                                Array.from({ length: 5 }).map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                        style={{ color: "#6236FF" }}
                                    >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                ))
                            }
                        </div>
                    </div>
                    <motion.p animate={{ color: heroTheme.subtitle }} style={{ margin: 0, fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: "500" }}>{language === 'fr' ? 'Approuvé par des milliers' : 'Trusted by Thousands'}</motion.p>
                </motion.div>

                <motion.h1 variants={itemVariants} className="title" animate={{ color: heroTheme.title }} style={{ position: "relative", zIndex: 10, fontSize: "clamp(38px, 5.5vw, 68px)", fontWeight: "600", letterSpacing: "-2px", margin: 0, lineHeight: "1.1" }}>
                    {language === 'fr' ? (
                        <>Gérez votre <span className="gradient-text italic" style={{ fontWeight: "400", letterSpacing: "-1px" }}>Argent </span>avec Clarté <br />
                            et <span className="gradient-text italic" style={{ fontWeight: "400", letterSpacing: "-1px" }}>Contrôle</span></>
                    ) : (
                        <>Manage your <span className="gradient-text italic" style={{ fontWeight: "400", letterSpacing: "-1px" }}>Money </span>with Clarity <br />
                            and <span className="gradient-text italic" style={{ fontWeight: "400", letterSpacing: "-1px" }}>Control</span></>
                    )}
                </motion.h1>

                <motion.p variants={itemVariants} className="subtitle" animate={{ color: heroTheme.subtitle }} style={{ fontSize: "19px" }}>
                    {language === 'fr'
                        ? "Solution bancaire tout-en-un pour envoyer de l'argent, suivre les dépenses et maîtriser vos finances — conçue pour le quotidien."
                        : "All-in-one banking to send money, track spending, and stay on top of your finances — designed for everyday life."}
                </motion.p>

                <motion.div variants={itemVariants} className="heroActions" style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(98, 54, 255, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="getStartedBtn"
                        style={{ padding: "14px 24px", fontSize: "16px", borderRadius: "10px", background: "linear-gradient(135deg, #6236FF, #324de9ff)", border: "0", color: "white", cursor: "pointer", fontWeight: "600", fontFamily: "Inter, sans-serif" }}
                    >
                        {language === 'fr' ? 'Commencer' : 'Get started'}
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: heroTheme.btnLearnHover, borderColor: "#D1D5DB" }}
                        whileTap={{ scale: 0.95 }}
                        className="learnMoreBtn"
                        animate={{ backgroundColor: heroTheme.btnLearnBg, color: heroTheme.btnLearnText, borderColor: heroTheme.btnLearnBorder }}
                        style={{ display: "flex", alignItems: "center", gap: "8px", padding: "14px 24px", border: "1px solid #E5E7EB", borderRadius: "10px", cursor: "pointer", fontWeight: "600", fontFamily: "Inter, sans-serif" }}
                    >
                        <PlayCircle size={20} style={{ color: "#6236FF" }} />
                        {language === 'fr' ? 'Voir comment ça marche' : 'See how it works'}
                    </motion.button>
                </motion.div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "min(50%, 560px)", minWidth: "260px", flex: "1 1 260px", position: "relative" }}>
                <motion.div
                    animate={{ background: `radial-gradient(circle, ${heroTheme.glow} 0%, rgba(139,92,246,0) 70%)` }}
                    transition={{ duration: 1.5 }}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "80%",
                        height: "80%",
                        filter: "blur(60px)",
                        zIndex: 0,
                        pointerEvents: "none"
                    }}
                />

                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1.2, bounce: 0.3 }}
                    style={{ zIndex: 1, position: 'relative' }}
                >
                    <motion.img
                        src={phoneMockup}
                        alt="phoneMockup"
                        className="phoneMockup"
                        style={{ width: "100%", maxWidth: "650px", height: "auto", transformOrigin: "center left", maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)" }}
                        initial={{ scale: 1.35 }}
                        animate={{ y: [0, -15, 0], scale: 1.35 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                </motion.div>
            </div>
        </div>
    )
}
