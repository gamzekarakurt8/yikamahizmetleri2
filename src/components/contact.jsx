import React from "react";

const areas = [
  "Tuzla",
  "Gebze",
  "Pendik",
  "Kartal",
  "Maltepe",
  "Bostancı",
  "Kadıköy",
  "Ümraniye",
];

const serviceLinks = [
  { href: "/koltuk-yikama/", name: "Koltuk Yıkama" },
  { href: "/hali-yikama/", name: "Halı Yıkama" },
  { href: "/arac-koltugu-yikama/", name: "Araç Koltuğu Yıkama" },
  { href: "/yatak-temizligi/", name: "Yatak Temizliği" },
  { href: "/ofis-koltugu-temizligi/", name: "Ofis Koltuğu Temizliği" },
];

export const Contact = (props) => {
  const phone = props.data ? props.data.phone : "";
  const tel = `tel:${phone.replace(/\s/g, "")}`;

  return (
    <div>
      <div id="cta">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2>Koltuklarınız ilk günkü gibi olsun</h2>
              <p>Hemen arayın, size en uygun zamanı birlikte planlayalım.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-light btn-lg" href={tel}>
                <i className="fa fa-phone"></i> {phone}
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
          </div>
        </div>
      </div>
      <div id="contact">
        <div className="container contact-grid">
          <div>
            <span className="eyebrow">Hizmet Bölgeleri</span>
            <h2>Hizmet Bölgelerimiz</h2>
            <p>{props.data ? props.data.serviceAreaText : "loading"}</p>
            <div className="service-areas">
              {areas.map((a) => (
                <span key={a}>
                  <i className="fa fa-map-marker"></i> {a}
                </span>
              ))}
            </div>
          </div>
          <div className="contact-info">
            <h3>İletişim Bilgileri</h3>
            <a className="contact-item" href={tel}>
              <i className="fa fa-phone"></i>
              <span>
                <small>Telefon</small>
                {phone}
              </span>
            </a>
            <a
              className="contact-item"
              href={props.data ? `mailto:${props.data.email}` : "/"}
            >
              <i className="fa fa-envelope-o"></i>
              <span>
                <small>E-posta</small>
                {props.data ? props.data.email : "loading"}
              </span>
            </a>
            <div className="contact-item">
              <i className="fa fa-map-marker"></i>
              <span>
                <small>Adres</small>
                {props.data ? props.data.address : "loading"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer">
        <div className="container footer-grid">
          <div>
            <a className="footer-brand" href="#page-top">
              <img src="img/favicon-48.png" alt="" width="32" height="32" />
              Profesyonel Yıkama
            </a>
            <p>
              Tuzla, Gebze, Pendik, Kartal ve çevresinde halı, koltuk, yatak ve
              araç koltuğu yıkama.
            </p>
            <div className="social">
              <a
                href={props.data ? props.data.facebook : "/"}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href={props.data ? props.data.instagram : "/"}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div>
            <h4>Hizmetler</h4>
            <ul>
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <a href={s.href}>{s.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>İletişim</h4>
            <ul>
              <li>
                <a href={tel}>{phone}</a>
              </li>
              <li>
                <a href={props.data ? `mailto:${props.data.email}` : "/"}>
                  {props.data ? props.data.email : ""}
                </a>
              </li>
              <li>{props.data ? props.data.address : ""}</li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} Yıkama Hizmetleri. Tüm hakları
            saklıdır.
          </p>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href="https://wa.me/905438543357"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile yazın"
      >
        <i className="fa fa-whatsapp"></i>
      </a>
    </div>
  );
};
