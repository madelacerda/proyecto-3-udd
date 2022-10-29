import axios from "axios";
import React, { useState } from "react";
import { LineChart } from "./Grafico";
import { UserData } from "./Data";

const getAPI = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

let tasasArray = [];
let fechasArray = [];
let nombre = "";

getAPI("https://mindicador.cl/api/dolar/").then((data) => {
  nombre = data.nombre;

  let tasas = data.serie;
  console.log(tasas);
  tasasArray = tasas.map((serie) => serie.valor);
  fechasArray = tasas.map((serie) => serie.fecha.split("T")[0]);
  console.log(tasasArray);
  console.log(fechasArray);
  console.log(nombre);
});

function Dolar() {
  const [userData, setUserData] = useState({
    labels: fechasArray,
    datasets: [
      {
        label: nombre,
        data: tasasArray,
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
    <div>
      {/* <Grafico chartData={tasasArray} nombre={nombre} fechasArray={fechasArray} /> */}
      <LineChart chartData={userData} />
    </div>
  );
}

export { Dolar };
