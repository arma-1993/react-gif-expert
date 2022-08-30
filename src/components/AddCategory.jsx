import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  // llamamos
  const [inputValue, setinputValue] = useState();
  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().lenght <= 1) return;
    // sirve para que cuando le den el enter no me
    //empieze a insertar cosas y si se cumple dicha function entonces si enviamelo al formulario
    onNewCategory(inputValue.trim());
    setinputValue(""); // sirve una vez escrito algo, se borre automaticamente
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
