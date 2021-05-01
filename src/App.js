import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
  // definir la categoria y Noticias
  const [category, saveCategory] = useState("");
  const [news, saveNews] = useState([])

  useEffect(() => {
    const consultAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=11c9aec0bb8e4e45bffffa391ecf22c2`;

      const answer = await fetch(url)
      const news = await answer.json();

      saveNews(news.articles)
    };

    consultAPI()

  }, [category]);

  return (
    <Fragment>
      <Header title="News search engine" />
 
      <div className="container white">
        <Formulario saveCategory={saveCategory} />

        <ListadoNoticias news={news} />

      </div>
    </Fragment>
  );
}

export default App;
