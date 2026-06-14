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




import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

import Home from "./Components/Home";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "http://localhost:5173/login";
    return null;
  }

  return children;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProtectedRoute>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </ProtectedRoute>
    </BrowserRouter>
  </React.StrictMode>
);