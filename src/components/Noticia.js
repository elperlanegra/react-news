import React from "react";

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
        {image}

        <div className="car-content">
          <h3>{title}</h3>
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

export default Noticia;
