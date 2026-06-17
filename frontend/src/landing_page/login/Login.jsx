// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";

// const Login = () => {
//   const navigate = useNavigate();
//   const [inputValue, setInputValue] = useState({
//     email: "",
//     password: "",
//   });

//   const { email, password } = inputValue;

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue({
//       ...inputValue,
//       [name]: value,
//     });
//   };

//   const handleError = (err) => toast.error(err, { position: "bottom-left" });

//   const handleSuccess = (msg) =>
//     toast.success(msg, { position: "bottom-left" });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:3002/login",
//         { ...inputValue },
//         { withCredentials: true },
//       );

//       const { success, message } = data;

//       if (success) {
//         localStorage.setItem("token", data.token); // IMPORTANT
//         navigate("/"); // or dashboard redirect
//       } else {
//         handleError(message);
//       }
//     } catch (error) {
//       console.log(error);
//     }

//     setInputValue({
//       email: "",
//       password: "",
//     });
//   };

//   return (
//     <div className="form_container">
//       <h2>Login Account</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             placeholder="Enter your email"
//             onChange={handleOnChange}
//           />
//         </div>

//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             placeholder="Enter your password"
//             onChange={handleOnChange}
//           />
//         </div>

//         <button type="submit">Submit</button>

//         <span>
//           Already have an account? <Link to="/signup">Signup</Link>
//         </span>
//       </form>

//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;


import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://stock-trading-platform-1-x4tx.onrender.com/api/login",
 {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
window.location.href = "https://dashboard212.netlify.app/";
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error logging in");
    }
  };

  return (
    <form onSubmit={handleLogin} className="text-center mt-5">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br/> <br/>

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}

      />
            <br/> <br/>


      <button type="submit" style={{color:"navy", backgroundColor:"pink"}}>Login</button> 
    </form> 
  );
}

export default Login;