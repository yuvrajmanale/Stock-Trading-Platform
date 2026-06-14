import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 p-5 border-bottom ">
        <h1 className="text-center">Charges</h1>
        <h5 className="text-center text-muted mt-3 fs-5 ">
          List of all charges and taxes
        </h5>
      </div>
      <div className="row mt-5 t">
        <div className="col-4 p-3 text-center text-muted">
          <img src="media\images\pricingEquity.svg" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-3 text-center text-muted">
          <img src="media\images\intradayTrades.svg" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-3 text-center text-muted">
          <img src="media\images\pricingEquity.svg" />
          <h1 className="fs-3">Free direct MF</h1>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
