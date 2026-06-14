import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="text-center">The Zerodha Universe</h1>
        <p className="text-center">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media\images\sensibullLogo.svg" />
          <p className="text-muted text-small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\zerodhaFundhouse.png" />
          <p className="text-muted text-small">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\smallcaseLogo.png" />
          <p className="text-muted text-small">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\streakLogo.png" style={{ width: "150px" }} />
          <p className="text-muted text-small">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\smallcaseLogo.png" />
          <p className="text-muted text-small">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\dittoLogo.png" style={{ width: "150px" }} />
          <p className="text-muted text-small mb-5 mt-5">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0  auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
