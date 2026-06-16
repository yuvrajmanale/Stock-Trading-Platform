// import React from "react";

// const Apps = () => {
//   return <h1>Apps</h1>;
// };

// export default Apps;


import React from "react";

const appsData = [
  {
    title: "Market News",
    desc: "Live updates from stock market",
    tag: "NEWS",
  },
  {
    title: "Stock Screener",
    desc: "Filter stocks by price, volume, trend",
    tag: "TOOLS",
  },
  {
    title: "IPO Tracker",
    desc: "Upcoming and active IPOs",
    tag: "IPO",
  },
  {
    title: "Currency Converter",
    desc: "USD, INR, EUR conversion",
    tag: "TOOLS",
  },
  {
    title: "TradingView Charts",
    desc: "Advanced chart analysis",
    tag: "CHARTS",
  },
  {
    title: "Learn Trading",
    desc: "Basics of stock market",
    tag: "EDUCATION",
  },
];

const Apps = () => {
  return (
    <div
      style={{
        padding: "30px",
        background: "#0a192f",
        minHeight: "100vh",
        color: "#e6f1ff",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Trading Apps</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {appsData.map((app, index) => (
          <div
            key={index}
            style={{
              background: "#112240",
              border: "1px solid #233554",
              borderRadius: "10px",
              padding: "20px",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <span
              style={{
                fontSize: "12px",
                background: "#00d09c",
                color: "#000",
                padding: "3px 8px",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              {app.tag}
            </span>

            <h4 style={{ marginTop: "10px" }}>{app.title}</h4>

            <p style={{ fontSize: "13px", color: "#a8b2d1" }}>
              {app.desc}
            </p>

            <button
              style={{
                marginTop: "10px",
                background: "transparent",
                border: "1px solid #00d09c",
                color: "#00d09c",
                padding: "6px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;