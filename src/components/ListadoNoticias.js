import React from "react";
import Noticia from "./Noticia";

const ListadoNoticias = ({ news }) => (
  <div className="row">
    {news.map((news) => (
      <Noticia />
    ))}
  </div>
);

export default ListadoNoticias;
