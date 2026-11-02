import React from "react";

export const Services = (props) => {
  return (
    <div id="services">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Hizmetlerimiz</span>
          <h2>Her kumaşa uygun profesyonel temizlik</h2>
        </div>
        <div className="service-grid">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="service-card">
                  <i className={d.icon}></i>
                  <h3>
                    {d.link ? <a href={d.link}>{d.name}</a> : d.name}
                  </h3>
                  <p>{d.text}</p>
                  {d.link && (
                    <a className="service-more" href={d.link}>
                      Detaylı bilgi <i className="fa fa-arrow-right"></i>
                    </a>
                  )}
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
