import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "../assets/style/chartZone.style.css";

const LABELS = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin',
    'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
const MIN_VALUE = -3;
const MAX_VALUE = 10;

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randomList = (min, max) => LABELS.map(label => randomInt(min, max));

const ChartZone = ({ selectedCity, favoriteCity }) => {
  const [chartData, setChartData] = useState(null);
  const [dataType, setDataType] = useState("temp_min");

  useEffect(() => {
    const updateChartData = () => {
      setChartData(buildData());
   };
  updateChartData();
  }, [selectedCity, favoriteCity, dataType]);

  const buildData = () => {
   return {
     labels: LABELS,
     datasets: [
       {
         label: selectedCity.city,
         data: selectedCity.data.map((monthData) => monthData[dataType]),
         backgroundColor: "rgb(255,128,128)",
         borderColor: "rgba(0, 0, 0, 0.5)",
         borderWidth: 1,
       },
       {
         label: favoriteCity.city,
         data: favoriteCity.data.map((monthData) => monthData[dataType]),
         backgroundColor: "gold",
         borderColor: "rgba(0, 0, 0, 0.5)",
         borderWidth: 1,
       },
     ],
   };
  };

  const [isHidden, setIsHidden] = useState(false);
  const [chartTitle, setChartTitle] = useState("Température minimale (°C)");

  const toggleChart = () => {
   setIsHidden(!isHidden);
  };

  const changeDataType = (newType) => {
   setDataType(newType);
   switch (newType) {
     case "temp_min":
       setChartTitle("Température minimale (°C)");
       break;
     case "temp_max":
       setChartTitle("Température maximale (°C)");
       break;
     case "pluviometrie":
       setChartTitle("Pluviométrie (mm)");
       break;
     case "ensoleillement":
       setChartTitle("Ensoleillement (jours)");
       break;
     case "jours_gel":
       setChartTitle("Jours de gel (jours)");
       break;
     default:
       setChartTitle("");
   }
  };

  const calculateMinMax = (dataType) => {
    const values = [];
    [selectedCity, favoriteCity].forEach((city) => {
      city.data.forEach((monthData) => {
        values.push(monthData[dataType]);
      });
    });
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    const dataRange = maxValue - minValue;
    const bufferPercentage = 0.4;
    const buffer = dataRange * bufferPercentage;
    const min = Math.floor(minValue - buffer);
    const max =Math.floor(maxValue + buffer) ;

    return { min: min, max: max };
  };

  return (
     <div>
       <button onClick={toggleChart}>{isHidden ? "Afficher" : "Cacher"}</button>
       {!isHidden && (
         <div className="chartZone">
           <div className="buttons">
             <button onClick={() => changeDataType("temp_min")}>
               Température minimale (°C)
             </button>
             <button onClick={() => changeDataType("temp_max")}>
               Température maximale (°C)
             </button>
             <button onClick={() => changeDataType("pluviometrie")}>
               Pluviométrie (mm)
             </button>
             <button onClick={() => changeDataType("ensoleillement")}>
               Ensoleillement (jours)
             </button>
             <button onClick={() => changeDataType("jours_gel")}>
               Jours de gel (jours)
             </button>
           </div>
           {chartData && (
             <Bar
               data={chartData}
               options={{
                 scales: {
                   y: {
                     min: calculateMinMax(dataType).min,
                     max: calculateMinMax(dataType).max,
                   },
                 },
                 animation: {
                   duration: 500,
                   easing: "easeIn",
                 },
                 plugins: {
                   title: {
                     display: true,
                     text: chartTitle,
                   },
                 },
                 legend: {
                   labels: {
                     fontSize: 20,
                   },
                 },
               }}
             />
           )}
         </div>
       )}
     </div>
);
};

export default ChartZone;
