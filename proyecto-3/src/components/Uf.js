import axios from "axios";
import React from "react";

const getAPI = async (url) => {
  const res = await axios.get(url);
  return res.data.serie;
};

let valoruf = 0;
getAPI("https://mindicador.cl/api/uf/22-10-2022").then((data) => {
  valoruf = data[0].valor;
});

function Uf() {
  return (
    <div>
      <h2>Valor UF</h2>
      <p>El valor de la uf de hoy es: {valoruf}</p>
    </div>
  );
}

export { Uf };
