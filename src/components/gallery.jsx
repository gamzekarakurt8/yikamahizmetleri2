import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Galeri</span>
          <h2>İşimizden kareler</h2>
        </div>
        <div className="portfolio-items">
          {props.data
            ? props.data.map((d, i) => (
                <Image
                  key={`${d.title}-${i}`}
                  title={d.title}
                  smallImage={d.smallImage}
                />
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
