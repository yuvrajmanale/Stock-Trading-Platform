import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      {/* <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link className="btn btn-green">Add funds</Link>
        <Link className="btn btn-blue">Withdraw</Link>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">4,043.10</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="data">
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div> */}

      <div
      style={{
        padding: "20px",
        background: "#f6f7fb",
        minHeight: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>Funds</h2>
          <p style={{ margin: "5px 0", color: "#666" }}>
            Instant, zero-cost fund transfers with UPI
          </p>
        </div>

        <div>
          <Link
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              background: "#2ecc71",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 500,
              marginRight: "10px",
              display: "inline-block",
            }}
          >
            Add funds
          </Link>

          <Link
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              background: "#3498db",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 500,
              display: "inline-block",
            }}
          >
            Withdraw
          </Link>
        </div>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
        }}
      >
        {/* Equity Card */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3>Equity</h3>

          {/* Row helper style reused inline */}
          {[
            ["Available margin", "₹4,043.10", true],
            ["Used margin", "₹3,757.30"],
            ["Available cash", "₹4,043.10"],
          ].map(([label, value, highlight], i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px 0",
              }}
            >
              <span style={{ color: "#555" }}>{label}</span>
              <b style={{ color: highlight ? "#2ecc71" : "#111" }}>
                {value}
              </b>
            </div>
          ))}

          <hr />

          {[
            ["Opening Balance", "₹4,043.10"],
            ["Payin", "₹4,064.00"],
            ["SPAN", "₹0.00"],
            ["Exposure", "₹0.00"],
            ["Total Collateral", "₹0.00"],
          ].map(([label, value], i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px 0",
              }}
            >
              <span style={{ color: "#555" }}>{label}</span>
              <b style={{ color: "#111" }}>{value}</b>
            </div>
          ))}
        </div>

        {/* Commodity Card */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h3>Commodity</h3>

          <p style={{ color: "#777", marginBottom: "15px" }}>
            You don't have a commodity account
          </p>

          <Link
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              background: "#3498db",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 500,
              display: "block",
            }}
          >
            Open Account
          </Link>
        </div>
      </div>
    </div>


    </>
  );
};

export default Funds;





  
    