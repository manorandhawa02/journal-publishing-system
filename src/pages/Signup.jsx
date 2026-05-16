import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Signup() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "author"
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const res = await API.post("/auth/register", formData);

    console.log(res.data);

    alert("Account Created Successfully!");

    navigate("/login");

  } catch (err) {

    console.log(err);

    alert(
      err.response?.data?.message || "Signup Failed"
    );
  }
};

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "linear-gradient(135deg, #0B3C5D, #328CC1)" }}
    >
      <div
        className="card shadow-lg p-5"
        style={{ width: "450px", borderRadius: "15px" }}
      >
        <h3 className="text-center mb-4">Create Journal Account</h3>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="form-control mb-3"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="form-control mb-3"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control mb-3"
            onChange={handleChange}
            required
          />

          <select
            name="role"
            className="form-select mb-4"
            onChange={handleChange}
          >
            <option value="author">Author</option>
            <option value="reviewer">Reviewer</option>
            <option value="admin">Admin</option>
          </select>

          <button className="btn btn-dark w-100">
            Create Account
          </button>

        </form>
      </div>
    </div>
  );
}

export default Signup;