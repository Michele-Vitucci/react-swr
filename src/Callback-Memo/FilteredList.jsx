import React, { useMemo } from "react";

export function FilteredList({ lista }) {

  const listaFiltrata = useMemo(() => {
    return lista.filter((elemento) => elemento.age < 18);
  }, [lista]);

  return (
    <div>
      <h2>Lista Filtrata</h2>
      <ul>
        {listaFiltrata.map((elemento) => (
          <li key={elemento.id}>
            {elemento.name}, Età: {elemento.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
