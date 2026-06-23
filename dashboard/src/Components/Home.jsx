// import React, { useEffect } from 'react';
// import Dashboard from './Dashboard';
// import TopBar from './TopBar';

// const Home = () => {

//   useEffect(() => {
//     // ✅ get token from URL
//     const params = new URLSearchParams(window.location.search);
//     const token = params.get("token");

//     if (token) {
//       // store token
//       localStorage.setItem("token", token);

//       // remove token from URL
//       window.history.replaceState({}, document.title, "/#/");
//     }

//     // ✅ check if token exists
//     const storedToken = localStorage.getItem("token");

//     if (!storedToken) {
//       // ❌ not logged in → go back to login app
//       window.location.href = "https://your-login-app-url";
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

// import React from 'react';
// import Dashboard from './Dashboard';
// import TopBar from './TopBar';
// // import Dashboard from "./Dashboard";

// const Home = () => (
//   <>
//     <TopBar />
//     <Dashboard />
//   </>
// );

// export default Home;


import React, { useEffect } from 'react';
import Dashboard from './Dashboard';
import TopBar from './TopBar';

const Home = () => {

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      window.history.replaceState({}, document.title, "/#/");
    }

    const storedToken = localStorage.getItem("token");

    if (!storedToken) {
      window.location.href = "https://stock-trading-platform-l4d8-rj31o9tii-yuvraj-manales-projects.vercel.app";
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