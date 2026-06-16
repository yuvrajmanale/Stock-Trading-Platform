

// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import { ToastContainer, toast } from "react-toastify";

// // const Signup = () => {
// //   const navigate = useNavigate();

// //   const [inputValue, setInputValue] = useState({
// //     email: "",
// //     password: "",
// //     username: "",
// //   });

// //   const { email, password, username } = inputValue;

// //   const handleOnChange = (e) => {
// //     const { name, value } = e.target;
// //     setInputValue({
// //       ...inputValue,
// //       [name]: value,
// //     });
// //   };

// //   const handleError = (err) =>
// //     toast.error(err, { position: "bottom-left" });

// //   const handleSuccess = (msg) =>
// //     toast.success(msg, { position: "bottom-right" });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const { data } = await axios.post(
// //         "http://127.0.0.1:3002/signup",
// //         { ...inputValue },
// //         { withCredentials: true }
// //       );

// //       const { success, message, token } = data;

// //       if (success) {
// //         // 🔥 IMPORTANT LINE
// //         localStorage.setItem("token", token);

// //         handleSuccess(message);
// //         navigate("/dashboard");
// //       } else {
// //         handleError(message);
// //       }

// //     } catch (error) {
// //       console.log(error);
// //       handleError("Something went wrong");
// //     }

// //     setInputValue({
// //       email: "",
// //       password: "",
// //       username: "",
// //     });
// //   };

// //   return (
// //     <div className="form_container">
// //       <h2>Signup Account</h2>

// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Email</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={email}
// //             onChange={handleOnChange}
// //           />
// //         </div>

// //         <div>
// //           <label>Username</label>
// //           <input
// //             type="text"
// //             name="username"
// //             value={username}
// //             onChange={handleOnChange}
// //           />
// //         </div>

// //         <div>
// //           <label>Password</label>
// //           <input
// //             type="password"
// //             name="password"
// //             value={password}
// //             onChange={handleOnChange}
// //           />
// //         </div>

// //         <button type="submit">Submit</button>

// //         <span>
// //           Already have an account? <Link to="/login">Login</Link>
// //         </span>
// //       </form>

// //       <ToastContainer />
// //     </div>
// //   );
// // };

// // export default Signup;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { email, username, password } = inputValue;

  //
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
  // "http://localhost:3002/signup",
  "https://stock-trading-platform-1-x4tx.onrender.com/api/signup",
  inputValue,
  { withCredentials: true }
);

      if (data.success) {
        // save token
        localStorage.setItem("token", data.token);

        // redirect to dashboard app
       window.location.href = "http://localhost:5173/Dashboard";
      //  window.location.href      = "https://stock-trading-platform-1-x4tx.onrender.com/api/signup";
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  };

  return (
    
    // <div className="form_container text-center mt-5 " >
    //   <h2 className="text-white">Signup</h2>

    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="email"
    //       name="email"
    //       placeholder="Email"
    //       value={email}
    //       onChange={handleChange}
    //       required
    //     />
    //     <br/><br/>
    //     <input
    //       type="text"
    //       name="username"
    //       placeholder="Username"
    //       value={username}
    //       onChange={handleChange}
    //       required
    //     />
    //     <br/> <br/>
    //     <input
    //       type="password"
    //       name="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={handleChange}
    //       required
    //     />
    //   <br/><br/>
    //     <button type="submit">Signup</button>
    //   </form>

    //   <p className="text-white">
    //     Already have an account? <Link to="/login">Login</Link>
    //   </p>
    // </div>

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
        style={{
          background: "#0b1f3a",
          border: "1px solid #233554",
          color: "#fff",
        }}
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
        style={{
          background: "#0b1f3a",
          border: "1px solid #233554",
          color: "#fff",
        }}
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
        style={{
          background: "#0b1f3a",
          border: "1px solid #233554",
          color: "#fff",
        }}
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


