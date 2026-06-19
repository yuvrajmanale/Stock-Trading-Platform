// import React from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./index.css";
// import Home from "./Components/Home";

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/*" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// import React from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import "./index.css";

// import Home from "./Components/Home";

// function ProtectedRoute({ children }) {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/*" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );




// import React from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import "./index.css";

// import Home from "./Components/Home";

// function ProtectedRoute({ children }) {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     window.location.href = "http://localhost:5173/login";
//     return null;
//   }

//   return children;
// }

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ProtectedRoute>
//         <Routes>
//           <Route path="/*" element={<Home />} />
//         </Routes>
//       </ProtectedRoute>
//     </BrowserRouter>
//   </React.StrictMode>
// );


// import React, { useEffect, useState } from "react";
// import { createRoot } from "react-dom/client";
// // import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
// import "./index.css";

// import Home from "./Components/Home";

// function ProtectedRoute({ children }) {
//   const [loading, setLoading] = useState(true);
//   const [isAuth, setIsAuth] = useState(false);

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const tokenFromUrl = params.get("token");

//     // ✅ get token from URL
//     if (tokenFromUrl) {
//       localStorage.setItem("token", tokenFromUrl);

//       // clean URL
//       window.history.replaceState({}, document.title, "/");
//     }

//     const token = localStorage.getItem("token");

//     if (token) {
//       setIsAuth(true);
//     }

//     setLoading(false);
//   }, []);

//   if (loading) return <h2>Loading...</h2>;

//   if (!isAuth) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// }

// function LoginRedirect() {
//   useEffect(() => {
//     window.location.href = "https://your-login-site.netlify.app/";
//   }, []);

//   return <h2>Redirecting to login...</h2>;
// }

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <HashRouter>  
//       <Routes>
//         {/* redirect /login to your actual login app */}
//         <Route path="/login" element={<LoginRedirect />} />

//         {/* protected dashboard */}
//         <Route
//           path="/*"
//           element={
//             <ProtectedRoute>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </HashRouter>
//   </React.StrictMode>
// );

import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./Components/Home";
// import ProtectedRoute from "./ProtectedRoute";
import ProtectedRoute from "./Components/ProtectedRoute";
function LoginRedirect() {
  useEffect(() => {
    window.location.href = "https://your-login-site.netlify.app/";
  }, []);

  return <h2>Redirecting...</h2>;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/login" element={<LoginRedirect />} />

        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);