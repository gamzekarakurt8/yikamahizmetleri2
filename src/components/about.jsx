import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container about-grid">
        <div className="about-media">
          <img
            src="img/logo-512.png"
            alt="Yıkama Hizmetleri halı ve koltuk yıkama logosu"
            width="512"
            height="512"
          />
        </div>
        <div className="about-text">
          <span className="eyebrow">Hakkımızda</span>
          <h2>Yaşam alanlarınıza ferahlık katıyoruz</h2>
          <p>{props.data ? props.data.paragraph : "loading..."}</p>
          <h3>Neden Bizi Seçmelisiniz?</h3>
          <ul className="check-list">
            {props.data
              ? [...props.data.Why, ...props.data.Why2].map((d, i) => (
                  <li key={`${d}-${i}`}>
                    <i className="fa fa-check"></i> {d}
                  </li>
                ))
              : "loading"}
          </ul>
        </div>
      </div>
    </div>
  );
};
