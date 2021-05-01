import React from "react";
import Noticia from "./Noticia";

const ListadoNoticias = ({ news }) => (
  <div className="row">
    {news.map((newsURL) => (
      <Noticia 
        key={newsURL.url}
        newsURL={newsURL}
      />
    ))}
  </div>
);

export default ListadoNoticias;
