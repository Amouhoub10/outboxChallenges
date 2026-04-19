import phoneMockup from "../assets/phonePic.png"
export default function HeroSection() {
    return (
        <div className="heroSection" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "60px 32px" }}>
            <div className="heroContent" style={{ display: "flex", flexDirection: "column", gap: "28px", width: "50%", paddingRight: "40px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", borderRadius: "8px", background: "#ffffff", border: "1px solid #E5E7EB", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)", width: "fit-content", padding: "10px 14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <p className="subtitle" style={{ margin: 0, fontWeight: "600", color: "#111827", fontSize: "14px" }}>4.9</p>
                        <div style={{ display: "flex", gap: "3px" }}>
                            {
                                Array.from({ length: 5 }).map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        fill="currentColor"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                        style={{ color: "#3B00ED" }}
                                    >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                ))
                            }
                        </div>
                    </div>
                    <p className="subtitle" style={{ margin: 0, fontSize: "12px", color: "#9CA3AF" }}>Trusted by Thousands</p>
                </div>

                <h1 className="title" style={{ fontSize: "68px", fontWeight: "600", letterSpacing: "-2px", color: "#111827", margin: 0, lineHeight: "1.1" }}>
                    Manage your <span className="italic" style={{ fontWeight: "400", letterSpacing: "-1px" }}>Money </span>with Clarity <br />
                    and <span className="italic" style={{ fontWeight: "400", letterSpacing: "-1px" }}>Control</span>
                </h1>

                <p className="subtitle">
                    All-in-one banking to send money, track spending, and stay on top of your finances — designed for everyday life.
                </p>

                <div className="heroActions" style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
                    <button className="getStartedBtn" style={{ padding: "14px 24px", fontSize: "16px", borderRadius: "10px", background: "linear-gradient(135deg, #6236FF, #324de9ff)" }}>Get started</button>
                    <button className="learnMoreBtn" style={{ padding: "14px 24px", fontSize: "16px", borderRadius: "10px", color: "#111827", borderColor: "#E5E7EB" }}>Contact with us</button>
                </div>
            </div>

            <div className="heroVisual" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "50%", position: "relative" }}>
                <img src={phoneMockup} alt="phoneMockup" className="phoneMockup" style={{ width: "100%", maxWidth: "650px", height: "auto", transform: "scale(1.35)", transformOrigin: "center left", maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)" }} />
            </div>
        </div>
    )
}