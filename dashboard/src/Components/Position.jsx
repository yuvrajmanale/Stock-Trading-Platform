// import React from "react";

// import { positions } from "../data/data";

// const Positions = () => {
//   return (
//     <>
//       <h3 className="title">Positions ({positions.length})</h3>

//       <div className="order-table">
//         <table>
//           <tr>
//             <th>Product</th>
//             <th>Instrument</th>
//             <th>Qty.</th>
//             <th>Avg.</th>
//             <th>LTP</th>
//             <th>P&L</th>
//             <th>Chg.</th>
//           </tr>

//           {positions.map((stock, index) => {
//             const curValue = stock.price * stock.qty;
//             const isProfit = curValue - stock.avg * stock.qty >= 0.0;
//             const profClass = isProfit ? "profit" : "loss";
//             const dayClass = stock.isLoss ? "loss" : "profit";

//             return (
//               <tr key={index}>
//                 <td>{stock.product}</td>
//                 <td>{stock.name}</td>
//                 <td>{stock.qty}</td>
//                 <td>{stock.avg.toFixed(2)}</td>
//                 <td>{stock.price.toFixed(2)}</td>
//                 <td className={profClass}>
//                   {(curValue - stock.avg * stock.qty).toFixed(2)}
//                 </td>
//                 <td className={dayClass}>{stock.day}</td>
//               </tr>
//             );
//           })}
//         </table>
//       </div>
//     </>
//   );
// };

// export default Positions;


import React from "react";
import { positions } from "../data/data";

const Positions = () => {
  return (
    <div
      style={{
        padding: "20px",
        background: "#f6f7fb",
        minHeight: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      {/* Title */}
      <h2 style={{ marginBottom: "15px", color: "#333" }}>
        Positions ({positions.length})
      </h2>

      {/* Table Card */}
      <div
        style={{
          background: "#fff",
          padding: "15px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          overflowX: "auto",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: "600px",
          }}
        >
          {/* Header */}
          <thead>
            <tr style={{ borderBottom: "1px solid #eee" }}>
              {["Product", "Instrument", "Qty", "Avg", "LTP", "P&L", "Chg"].map(
                (h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: "left",
                      padding: "12px",
                      fontSize: "12px",
                      color: "#777",
                      fontWeight: "500",
                      textTransform: "uppercase",
                    }}
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {positions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const pnl = curValue - stock.avg * stock.qty;
              const isProfit = pnl >= 0;

              return (
                <tr
                  key={index}
                  style={{
                    borderBottom: "1px solid #f1f1f1",
                  }}
                >
                  <td style={{ padding: "12px", color: "#444" }}>
                    {stock.product}
                  </td>

                  <td style={{ padding: "12px", color: "#444" }}>
                    {stock.name}
                  </td>

                  <td style={{ padding: "12px" }}>{stock.qty}</td>

                  <td style={{ padding: "12px" }}>
                    {stock.avg.toFixed(2)}
                  </td>

                  <td style={{ padding: "12px" }}>
                    {stock.price.toFixed(2)}
                  </td>

                  {/* P&L */}
                  <td
                    style={{
                      padding: "12px",
                      fontWeight: "500",
                      color: isProfit ? "#2ecc71" : "#e74c3c",
                    }}
                  >
                    {pnl.toFixed(2)}
                  </td>

                  {/* Change */}
                  <td
                    style={{
                      padding: "12px",
                      color: stock.isLoss ? "#e74c3c" : "#2ecc71",
                      fontWeight: "500",
                    }}
                  >
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;