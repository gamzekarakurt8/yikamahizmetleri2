import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="container intro-grid">
          <div className="intro-text">
            <span className="intro-badge">
              <i className="fa fa-map-marker"></i> Tuzla · Pendik · Kartal ·
              Gebze
            </span>
            <h1>{props.data ? props.data.title : "Loading"}</h1>
            <p>{props.data ? props.data.paragraph : "Loading"}</p>
            <div className="intro-actions">
              <a className="btn btn-custom btn-lg" href="tel:+905438543357">
                <i className="fa fa-phone"></i> Hemen Ara
              </a>
              <a
                className="btn btn-whatsapp btn-lg"
                href="https://wa.me/905438543357"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-whatsapp"></i> WhatsApp
              </a>
            </div>
            <ul className="intro-trust">
              <li>
                <i className="fa fa-check-circle"></i> Yerinde hizmet
              </li>
              <li>
                <i className="fa fa-check-circle"></i> 7/24 randevu
              </li>
              <li>
                <i className="fa fa-check-circle"></i> Doğa dostu ürünler
              </li>
            </ul>
          </div>
          <div className="intro-media">
            <img
              src="img/portfolio/koltuk-takimi-yikama.jpg"
              alt="Yerinde koltuk takımı yıkama"
              width="1200"
              height="900"
            />
            <div className="intro-card">
              <i className="fa fa-tint"></i>
              <div>
                <strong>Buharlı & vakumlu</strong>
                <span>derinlemesine temizlik</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
