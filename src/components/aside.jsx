import React, { Component } from "react";

const Aside = (props) => {
  return (
    <div className="aside">
      <div className="illustration" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560454356-3412f0c59eb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')"}}></div>
      <h1>{props.garage}</h1>
      <p>Our garage is the best. Reasonable prices, always on time, we are the best (and fictionnal).</p>
      {props.children}
    </div>
  );
}

export default Aside;
