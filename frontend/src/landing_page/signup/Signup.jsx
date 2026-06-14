// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";

// const Signup = () => {
//   const [inputValue, setInputValue] = useState({
//     email: "",
//     password: "",
//     username: "",
//   });

//   const { email, password, username } = inputValue;

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;

//     setInputValue({
//       ...inputValue,
//       [name]: value,
//     });
//   };

//   const handleError = (msg) => toast.error(msg, { position: "bottom-left" });

//   const handleSuccess = (msg) =>
//     toast.success(msg, { position: "bottom-right" });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const { data } = await axios.post(
//         "http://localhost:3002/signup",
//         inputValue,
//         { withCredentials: true },
//       );

//       const { success, message, token } = data;

//       if (success) {
//         localStorage.setItem("token", token);
//         window.location.href = "http://localhost:5174/home";
//       } else {
//         handleError(message);
//       }
//     } catch (error) {
//       console.log(error);
//       handleError("Server error");
//     }

//     setInputValue({
//       email: "",
//       password: "",
//       username: "",
//     });
//   };

//   return (
//     <div className="form_container">
//       <h2>Signup</h2>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleOnChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Username</label>
//           <input
//             type="text"
//             name="username"
//             value={username}
//             onChange={handleOnChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={handleOnChange}
//             required
//           />
//         </div>

//         <button type="submit">Submit</button>

//         <p>
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </form>

//       <ToastContainer />
//     </div>
//   );
// };

// export default Signup;

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
import "./Signup.css";


const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { email, username, password } = inputValue;

  // ✅ FIXED: missing function
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
        "http://localhost:3002/signup",
        inputValue,
        { withCredentials: true }
      );

      if (data.success) {
        // save token
        localStorage.setItem("token", data.token);

        // redirect to dashboard app
        window.location.href = "http://localhost:5174";
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  };

  return (
    <div className="form_container">
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          required
        />

        <button type="submit">Signup</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;