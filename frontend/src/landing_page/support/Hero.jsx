import React from "react";
import "./support.css";

// function Hero() {
//   return (
//     <section className="container-fluid" id="supportHero">
//       <div className=" p-5 " id="Supportwrapper">
//         <h4>Support Portal</h4>
//         <a href="">Track Ticket</a>
//       </div>
//       <div className="row p-5 m-5">
//         <div className="col p-5"> 
//         <h1 className="fs-3">Search for answere or browse help topic to create a ticket</h1>
//         <input placeholder="Eg.how do I Activate F&O" />
//         <a href="" >Track Account opening</a>
//         <a href="" > Track segment activation</a>
//         <a href="" >Intraday margin</a>
//         <a href="" > kite user manual</a>
//         </div>
//         <div className="col-6 p-5"> 
//         <h1 className="fs-3">Feature</h1>
//        <ol>
//         <li> <a href="" >Current Takeovers and Delisting - january 2024</a>
//         </li>
//         <li><a href="" >Latest Intraday leverags - MIS & Co</a></li>
//        </ol>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      
      <div id="Supportwrapper" className="py-4">
        <h4>Support Portal</h4>
        <a href="">Track Ticket</a>
      </div>

      <div className="row px-5 py-4">
        
        {/* LEFT */}
        <div className="col-md-6">
          <h1 className="fs-4">
            Search for answers or browse help topics to create a ticket
          </h1>

          <input
            className="mt-3"
            placeholder="Eg. how do I activate F&O"
          />

          <div className="mt-3 d-flex flex-column gap-2">
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margin</a>
            <a href="">Kite user manual</a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-md-6">
          <h1 className="fs-4">Latest Updates</h1>

          <ol className="mt-3">
            <li>
              <a href="">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>

      </div>
    </section>
  );
}

export default Hero;
