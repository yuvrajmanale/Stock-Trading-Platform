// import React, { useState, useEffect } from "react";
// import axios, { all } from "axios";
// import { VerticalGraph } from "./VerticalGraph";

// // import { holdings } from "../data/data";

// const Holdings = () => {
//   const [allHoldings, setAllHoldings] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3002/allHoldings").then((res) => {
//       // console.log(res.data);
//       setAllHoldings(res.data);
//     });
//   }, []);

//   // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//   const labels = allHoldings.map((subArray) => subArray["name"]);

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Stock Price",
//         data: allHoldings.map((stock) => stock.price),
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//       },
//     ],
//   };

//   // export const data = {
//   //   labels,
//   //   datasets: [
//   // {
//   //   label: 'Dataset 1',
//   //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//   //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
//   // },
//   //     {
//   //       label: 'Dataset 2',
//   //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//   //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//   //     },
//   //   ],
//   // };

//   return (
//     <>
//       <h3 className="title">Holdings ({allHoldings.length})</h3>

//       <div className="order-table">
//         <table>
//            <thead>  
//           <tr>
//             <th>Instrument</th>
//             <th>Qty.</th>
//             <th>Avg. cost</th>
//             <th>LTP</th>
//             <th>Cur. val</th>
//             <th>P&L</th>
//             <th>Net chg.</th>
//             <th>Day chg.</th>
//           </tr>
//      </thead>

//        <tbody>  
//           {allHoldings.map((stock, index) => {
//             const curValue = stock.price * stock.qty;
//             const isProfit = curValue - stock.avg * stock.qty >= 0.0;
//             const profClass = isProfit ? "profit" : "loss";
//             const dayClass = stock.isLoss ? "loss" : "profit";

//             return (
//               <tr key={index}>
//                 <td>{stock.name}</td>
//                 <td>{stock.qty}</td>
//                 <td>{stock.avg.toFixed(2)}</td>
//                 <td>{stock.price.toFixed(2)}</td>
//                 <td>{curValue.toFixed(2)}</td>
//                 <td className={profClass}>
//                   {(curValue - stock.avg * stock.qty).toFixed(2)}
//                 </td>
//                 <td className={profClass}>{stock.net}</td>
//                 <td className={dayClass}>{stock.day}</td>
//               </tr>
//             );
//           })}
//           </tbody>
//         </table>
//       </div>

//       <div className="row">
//         <div className="col">
//           <h5>
//             29,875.<span>55</span>{" "}
//           </h5>
//           <p>Total investment</p>
//         </div>
//         <div className="col">
//           <h5>
//             31,428.<span>95</span>{" "}
//           </h5>
//           <p>Current value</p>
//         </div>
//         <div className="col">
//           <h5>1,553.40 (+5.20%)</h5>
//           <p>P&L</p>
//         </div>
//       </div>
//       <VerticalGraph data={data} />
//     </>
//   );
// };

// export default Holdings;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("https://stock-trading-platform-1-x4tx.onrender.com/api/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  const labels = allHoldings.map((s) => s.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((s) => s.price),
        backgroundColor: "rgba(99, 132, 255, 0.6)",
      },
    ],
  };

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
        Holdings ({allHoldings.length})
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
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "1px solid #eee" }}>
              {[
                "Instrument",
                "Qty",
                "Avg cost",
                "LTP",
                "Cur value",
                "P&L",
                "Net chg",
                "Day chg",
              ].map((h) => (
                <th
                  key={h}
                  style={{
                    padding: "10px",
                    fontSize: "12px",
                    color: "#777",
                    fontWeight: "500",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
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
                  <td style={{ padding: "10px" }}>{stock.name}</td>
                  <td style={{ padding: "10px" }}>{stock.qty}</td>
                  <td style={{ padding: "10px" }}>
                    {stock.avg.toFixed(2)}
                  </td>
                  <td style={{ padding: "10px" }}>
                    {stock.price.toFixed(2)}
                  </td>
                  <td style={{ padding: "10px" }}>
                    {curValue.toFixed(2)}
                  </td>

                  <td
                    style={{
                      padding: "10px",
                      color: isProfit ? "#2ecc71" : "#e74c3c",
                      fontWeight: "500",
                    }}
                  >
                    {pnl.toFixed(2)}
                  </td>

                  <td
                    style={{
                      padding: "10px",
                      color: isProfit ? "#2ecc71" : "#e74c3c",
                    }}
                  >
                    {stock.net}
                  </td>

                  <td
                    style={{
                      padding: "10px",
                      color: stock.isLoss ? "#e74c3c" : "#2ecc71",
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

      {/* Summary Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: "200px",
            background: "#fff",
            padding: "15px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ margin: 0 }}>29,875.55</h3>
          <p style={{ color: "#777" }}>Total investment</p>
        </div>

        <div
          style={{
            flex: 1,
            minWidth: "200px",
            background: "#fff",
            padding: "15px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ margin: 0 }}>31,428.95</h3>
          <p style={{ color: "#777" }}>Current value</p>
        </div>

        <div
          style={{
            flex: 1,
            minWidth: "200px",
            background: "#fff",
            padding: "15px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ margin: 0, color: "#2ecc71" }}>
            1,553.40 (+5.20%)
          </h3>
          <p style={{ color: "#777" }}>P&L</p>
        </div>
      </div>

      {/* Graph */}
      <div
        style={{
          marginTop: "25px",
          background: "#fff",
          padding: "15px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <VerticalGraph data={data} />
      </div>
    </div>
  );
};

export default Holdings;