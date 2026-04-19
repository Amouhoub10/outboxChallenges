import logo from "../assets/challenge1_2/logoNav.png"
export default function Nav() {
  return (
    <div className="navBar" style={{ borderRadius: "16px", padding: "16px 24px", boxShadow: "0 4px 24px rgba(0, 0, 0, 0.04)", border: "1px solid #F3F4F6", top: "-5px" }}>
      <div className="navBrand" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <img src={logo} alt="logo" className="logo" style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} />
          <h2 style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: "700", fontSize: "24px", color: "#111827", letterSpacing: "-0.5px" }}>Vaulta</h2>
        </a>
      </div>

      <ul className="navList">
        <li>About</li>
        <li>Features</li>
        <li>Integrations</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>

      <div className="navActions">
        <button className="learnMoreBtn" style={{ border: "none", color: "#111827", fontWeight: "600", padding: "10px 16px" }}>Sign in</button>
        <button className="getStartedBtn" style={{ padding: "10px 20px", fontSize: "15px", borderRadius: "8px", background: "linear-gradient(135deg, #6236FF, #324de9ff)", boxShadow: "0 4px 14px rgba(98, 54, 255, 0.3)" }}>Get started</button>
      </div>
    </div>
  )
}
