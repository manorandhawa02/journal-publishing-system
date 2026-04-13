import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    if (
      email === storedUser.email &&
      password === storedUser.password
    ) {
      localStorage.setItem("role", storedUser.role);
      localStorage.setItem("isAuthenticated", "true");

      if (storedUser.role === "author") navigate("/author");
      if (storedUser.role === "reviewer") navigate("/reviewer");
      if (storedUser.role === "admin") navigate("/admin");

    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "linear-gradient(135deg, #1e3c72, #2a5298)" }}
    >
      <div
        className="card shadow-lg p-5 border-0"
        style={{
          width: "420px",
          borderRadius: "20px",
          backdropFilter: "blur(10px)"
        }}
      >
        <h3 className="text-center mb-4">Journal System Login</h3>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="w-100"
            style={{
              backgroundColor: "#0B3C5D",
              color: "white",
              padding: "10px",
              borderRadius: "10px",
              border: "none",
              fontWeight: "600"
            }}
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;