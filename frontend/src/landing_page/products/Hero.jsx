import React from 'react'

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center text-muted mt-5 p-3"> 
      <h1>Zerodha Products</h1>
      <h3 className="mt-3 text-muted fs-4">Sleek, modern, and intuitive trading platforms</h3>
      <p className="text-muted mt-3 mb-5">Check out our <a href="/products"style={{textDecoration:"none"}}> investment </a><a href="/products"style={{textDecoration:"none"}}> offerings <i className="fa fa-long-arrow-right text-center"></i></a> </p>
      </div>
    </div>
  )
}

export default Hero
