import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" alt="Education" style={{ width: "70%" }} />
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
           Versity, the largest online stock market eucation book in the world covring everything from the basics to advanced trading.
          </p>
          <a href="" className="mx-5" style={{ textDecoration: "none" }}>
            Versity <i className="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className=" mt-5">
            TradingQ&A, the most active and investemt community in India for all your market related queries.
          </p>
          <a href="" className="mx-5" style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
     </div>
  );
}

export default Education;
