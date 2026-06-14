// import React, { useEffect, useState } from 'react';
// import api from '../api';
// import Dashboard from './Dashboard';
// import TopBar from './TopBar';

// const LOGIN_URL = 'http://localhost:5173/login';

// const Home = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         await api.get('/auth/me');
//         setLoading(false);
//       } catch (error) {
//         window.location.href = LOGIN_URL;
//       }
//     };

//     fetchUser();
//   }, []);

//   if (loading) {
//     return <div className="loading">Checking authentication...</div>;
//   }

//   return (
//     <>
//       <TopBar />
//       <Dashboard />
//     </>
//   );
// };

// export default Home;

import React from 'react';
import Dashboard from './Dashboard';
import TopBar from './TopBar';
// import Dashboard from "./Dashboard";

const Home = () => (
  <>
    <TopBar />
    <Dashboard />
  </>
);

export default Home;
