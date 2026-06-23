


import React, { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import api from "../api";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { email, username, password } = inputValue;

  // ✅ FIXED HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/signup", inputValue);
        // { withCredentials: true }
      

      if (data.success) {
        // save token + redirect
        localStorage.setItem("token", data.token);

        window.location.href =
  `https://creative-kelpie-5fe434.netlify.app/#/?token=${data.token}`;
        // optional reset
        setInputValue({
          email: "",
          username: "",
          password: "",
        });
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "#0a192f",
      }}
    >
      <div
        className="p-4 rounded shadow"
        style={{
          width: "360px",
          background: "#112240",
          border: "1px solid #233554",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#e6f1ff" }}>
          Signup
        </h2>

        <form onSubmit={handleSubmit}>
          <label style={{ color: "#e6f1ff", fontSize: "14px" }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="form-control mb-3"
            placeholder="Enter email"
            required
          />

          <label style={{ color: "#e6f1ff", fontSize: "14px" }}>
            Username
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            className="form-control mb-3"
            placeholder="Enter username"
            required
          />

          <label style={{ color: "#e6f1ff", fontSize: "14px" }}>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="form-control mb-3"
            placeholder="Enter password"
            required
          />

          <button
            type="submit"
            className="btn w-100"
            style={{
              background: "#00d09c",
              color: "#000",
              fontWeight: "600",
            }}
          >
            Signup
          </button>
        </form>

        <p className="text-center mt-3" style={{ color: "#e6f1ff" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#00d09c" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;