


import React, { useState } from "react";
import api from "../api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/login", {
        email,
        password,
      });

      if (data.token) {
        // save token
        localStorage.setItem("token", data.token);

        // redirect to dashboard
        window.location.href =
          `https://creative-kelpie-5fe434.netlify.app/#/?token=${data.token}`;
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;