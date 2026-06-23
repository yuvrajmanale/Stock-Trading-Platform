import React, { useEffect } from 'react';
import Dashboard from './Dashboard';
import TopBar from './TopBar';

const Home = () => {

  useEffect(() => {
    // ✅ get token from URL
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      // store token
      localStorage.setItem("token", token);

      // remove token from URL
      window.history.replaceState({}, document.title, "/#/");
    }

    // ✅ check if token exists
    const storedToken = localStorage.getItem("token");

    if (!storedToken) {
      // ❌ not logged in → go back to login app
      window.location.href = "https://your-login-app-url";
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
