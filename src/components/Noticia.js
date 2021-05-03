import React from "react";
import PropTypes from "prop-types";

const Noticia = ({ newsURL }) => {
  // Extraer los datos
  const { urlToImage, url, title, description, source } = newsURL;

  const image = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />


    </div>
  ) : null;

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {image}
        <span className="card-title new badge" data-badge-caption={source.name}></span>
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>{description}</p>
        </div>
        <div class="card-action">
        <a
        href={url}
        target="_blank"
        className="waves-effect waves-light btn-smal"
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
  newsURL: PropTypes.object.isRequired,
};

export default Noticia;
