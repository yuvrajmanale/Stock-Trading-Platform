// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './landing_page/login/Login.jsx';
// import Signup from './landing_page/signup/Signup.jsx';
// import Dashboard from './Dashboard.jsx';

// function ProtectedRoute({ children }) {
//   localStorage.setItem('token', response.data.token);
// window.location.href = '/dashboard';
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navigate replace to="/login" />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Homepage from "./landing_page/home/Homepage.jsx";
// import AboutPage from "./landing_page/about/AboutPage.jsx";
// import ProductPage from "./landing_page/products/ProductPage.jsx";
// import PricingPage from "./landing_page/pricing/PricingPage.jsx";
// import SupportPage from "./landing_page/support/SupportPage.jsx";
// // import Dashboard from "./Dashboard.jsx";
// // import Login from "./landing_page/login/Login.jsx";
// import Signup from "./landing_page/signup/Signup.jsx";
// import Login from "./landing_page/login/Login.jsx";

// function ProtectedRoute({ children }) {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/product" element={<ProductPage />} />
//         <Route path="/pricing" element={<PricingPage />} />
//         <Route path="/support" element={<SupportPage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         <ProtectedRoute>
//           <Dashboard />
//         </ProtectedRoute>

//         <Route path="*" element={<Navigate replace to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;





// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Homepage from "./landing_page/home/Homepage.jsx";
// import AboutPage from "./landing_page/about/AboutPage.jsx";
// import ProductPage from "./landing_page/products/ProductPage.jsx";
// import PricingPage from "./landing_page/pricing/PricingPage.jsx";
// import SupportPage from "./landing_page/support/SupportPage.jsx";

// import Login from "./landing_page/login/Login.jsx";
// import Signup from "./landing_page/signup/Signup.jsx";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* Landing Pages */}
//         <Route path="/" element={<Homepage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/product" element={<ProductPage />} />
//         <Route path="/pricing" element={<PricingPage />} />
//         <Route path="/support" element={<SupportPage />} />

//         {/* Auth */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* fallback */}
//         <Route path="*" element={<Navigate to="/" />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Navbar from "./landing_page/components/Navbar";
// import Footer from "./landing_page/components/Footer";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Homepage from "./landing_page/home/Homepage.jsx";
import AboutPage from "./landing_page/about/AboutPage.jsx";
import ProductPage from "./landing_page/products/ProductPage.jsx";
import PricingPage from "./landing_page/pricing/PricingPage.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";

import Login from "./landing_page/login/Login.jsx";
import Signup from "./landing_page/signup/Signup.jsx";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        {/* Landing Pages */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;