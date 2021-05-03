import React from "react";
import PropTypes from "prop-types";

const Noticia = ({ newsURL }) => {
  // Extraer los datos
  const { urlToImage, url, title, description, source } = newsURL;

  const image = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          {image}
          <span className="card-title">{title}</span>
        </div>

        <div className="card-content">
          <p>{description}</p>
        </div>

        <div className="card-action">
          <a
            href={url}
            target="_blank"
            className="waves-effect waves-light btn"
            rel="noopener noreferrer"
          >
            Show More
          </a>
        </div>
      </div>
    </div>
  );
};

Noticia.protoTypes = {
  newsURL: PropTypes.object.isRequired
}

export default Noticia;
