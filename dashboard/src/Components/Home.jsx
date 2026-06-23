// import React, { useEffect } from 'react';
// import Dashboard from './Dashboard';
// import TopBar from './TopBar';

// const Home = () => {

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const token = params.get("token");

//     if (token) {
//       localStorage.setItem("token", token);
//       window.history.replaceState({}, document.title, "/#/");
//     }

//     const storedToken = localStorage.getItem("token");

//     if (!storedToken) {
//       window.location.href = "https://stock-trading-platform-l4d8-rj31o9tii-yuvraj-manales-projects.vercel.app";
//     }
//   }, []);

//   return (
//     <>
//       <TopBar />
//       <Dashboard />
//     </>
//   );
// };

// export default Home;

import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    // if no token → go to login
    if (!token) {
      window.location.href =
        "https://stock-trading-platform-l4d8-rj31o9tii-yuvraj-manales-projects.vercel.app";
    }
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;