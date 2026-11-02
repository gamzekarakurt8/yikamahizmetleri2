import React from "react";

export const Image = ({ title, smallImage }) => {
  return (
    <figure className="portfolio-item">
      <img
        src={smallImage}
        alt={`${title} - Tuzla, Pendik, Kartal`}
        loading="lazy"
      />
      <figcaption>{title}</figcaption>
    </figure>
  );
};
