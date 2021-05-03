import React from "react";
import PropTypes from "prop-types";
import Noticia from "./Noticia";

const ListadoNoticias = ({ news }) => (
  <div className="row">
    {news.map((newsURL) => (
      <Noticia key={newsURL.url} newsURL={newsURL} />
    ))}
  </div>
);

ListadoNoticias.propTypes = {
  news: PropTypes.array.isRequired
}

export default ListadoNoticias;
