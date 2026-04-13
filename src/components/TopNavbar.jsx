import { Link, useNavigate } from "react-router-dom";

function TopNavbar() {

  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const isAuth = localStorage.getItem("isAuthenticated");

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <nav
      style={{
        backgroundColor: "#0B3C5D",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h4 style={{ margin: 0, fontWeight: "600" }}>
          Global Scientific Journal
        </h4>
      </Link>

      {/* Right Side */}
      <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>

        {!isAuth && (
          <>
            <Link to="/signup" style={linkStyle}>Sign Up</Link>
            <Link to="/login" style={linkStyle}>Login</Link>
          </>
        )}

        {isAuth && (
          <>
            {role === "author" && <Link to="/author" style={linkStyle}>Dashboard</Link>}
            {role === "reviewer" && <Link to="/reviewer" style={linkStyle}>Dashboard</Link>}
            {role === "admin" && <Link to="/admin" style={linkStyle}>Dashboard</Link>}

            <button onClick={handleLogout} style={logoutBtn}>
              Logout
            </button>
          </>
        )}

      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500"
};

const logoutBtn = {
  backgroundColor: "white",
  color: "#0B3C5D",
  border: "none",
  padding: "6px 15px",
  borderRadius: "8px",
  fontWeight: "600",
  cursor: "pointer"
};

export default TopNavbar;