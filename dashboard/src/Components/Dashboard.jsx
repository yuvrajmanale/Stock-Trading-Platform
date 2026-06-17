// import React from "react";
// import { Route, Routes } from "react-router-dom";

// import Apps from "./Apps";
// import Funds from "./Funds";
// import Holdings from "./Holdings";

// import Order from "./Order";
// import Position from "./Position";
// import Summary from "./Summary";
// import WatchList from "./WatchList";
// import { GeneralContextProvider } from "./GeneralContext";
// import ProtectedRoute from "./ProtectedRoute";

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <GeneralContextProvider>
//         <WatchList />
//       </GeneralContextProvider>
//       <div className="content">
//         <ProtectedRoute>
//         <Routes>
//           <Route exact path="/" element={<Summary />} />
//           <Route path="/orders" element={<Order />} />
//           <Route path="/holdings" element={<Holdings />} />
//           <Route path="/positions" element={<Position />} />
//           <Route path="/funds" element={<Funds />} />
//           <Route path="/apps" element={<Apps />} />
//         </Routes>
//         </ProtectedRoute>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import { Routes, Route } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Order from "./Order";
import Position from "./Position";
import Summary from "./Summary";
import WatchList from "./WatchList";

import { GeneralContextProvider } from "./GeneralContext";
import ProtectedRoute from "./ProtectedRoute";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  // if (!token) {
  //   // window.location.href = "http://localhost:5173/login";
  //   window.location.href = "https://stock-trading-platform-l4d8.vercel.app/login";
  //   return null;
  // }

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Position />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;