import React from "react";

export const Testimonials = (props) => {
  if (!props.data || props.data.length === 0) {
    return null;
  }

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <span className="eyebrow">Müşteri Yorumları</span>
          <h2>Müşterilerimiz ne diyor?</h2>
          <p>Instagram'da bizim için yazılanlardan bazıları</p>
        </div>
        <div className="testimonial-list">
          {props.data.map((d, i) => (
            <div key={`${d.username}-${i}`}>
              <div className="testimonial">
                <div className="testimonial-head">
                  <span className="testimonial-avatar" aria-hidden="true">
                    {d.username.replace("@", "").charAt(0).toUpperCase()}
                  </span>
                  <span className="testimonial-meta">{d.username}</span>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </div>
                <p className="testimonial-content">{d.text}</p>
              </div>
            </div>
          ))}
        </div>
        {props.instagram && (
          <div className="text-center">
            <a
              className="btn btn-custom btn-lg"
              href={props.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram"></i> Instagram'da Takip Edin
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
