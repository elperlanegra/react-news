import React from "react";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";

const Formulario = ({ saveCategory }) => {
  const OPTIONS = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];

  // utilizar custom hook
  const [categories, SelectNotices] = useSelect("general", OPTIONS);

  // submit al from, psar categoa a app.js
  const searchNotices = (e) => {
    e.preventDefault();

    saveCategory(categories);
  };

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form
          onSubmit={searchNotices}
        >
          <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>

          <SelectNotices />

          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles["btn-block"]} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
