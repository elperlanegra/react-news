import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {
  
  // definir la categoria y Noticias
  const [categories, saveCategory] = useState('')
  
  return (
    <Fragment>
      <Header title="News search engine" />

      <div className="container white">
        <Formulario 
          saveCategory={saveCategory}
        />
      </div>
    </Fragment>
  );
}

export default App;
