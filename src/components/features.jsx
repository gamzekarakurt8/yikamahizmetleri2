import React from "react";

export const Features = (props) => {
  return (
    <div id="features">
      <div className="container">
        <div className="feature-grid">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="feature-card">
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
