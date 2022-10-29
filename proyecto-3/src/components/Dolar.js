import axios from "axios";
import React, { useState } from "react";
import { LineChart } from "./Grafico";


const getAPI = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

let tasasArray = [];
let fechasArray = [];
let nombre = "";
let tasasArrayReverse=[];
let fechasArrayReverse=[];

getAPI("https://mindicador.cl/api/dolar/").then((data) => {
  nombre = data.nombre;
  let tasas = data.serie;
  tasasArray = tasas.map((serie) => serie.valor);
  tasasArrayReverse = tasasArray.reverse();
  fechasArray = tasas.map((serie) => serie.fecha.split("T")[0]);
  fechasArrayReverse = fechasArray.reverse();
  console.log(tasasArrayReverse);
});

function Dolar() {
  const [userData, setUserData] = useState({
    labels: fechasArrayReverse,
    datasets: [
      {
        label: nombre,
        data: tasasArrayReverse,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="container">
        <h2>{nombre}</h2>
      {/* <Grafico chartData={tasasArray} nombre={nombre} fechasArray={fechasArray} /> */}
      <LineChart chartData={userData} />
    </div>
  );
}

export { Dolar };
