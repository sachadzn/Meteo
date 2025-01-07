import meteoDataByCity from '../data/meteoDataByCity';
import React from 'react';
import '../assets/style/dataForCity.style.css'
import '../assets/style/chartZone.style.css';
import '../assets/style/dataCell.style.css';
import '../assets/style/dataComparison.style.css';



const WeatherTable = ({ cityData }) => {
  const weather = cityData.data.map((monthData, index) => (
                                      <div className="meteoData" key={index}>
                                        <div className="dataCell">{monthData.pour}</div>
                                        <div className="dataCell temperature">{monthData.temp_min}</div>
                                        <div className="dataCell temperature">{monthData.temp_max}</div>
                                        <div className="dataCell mm">{monthData.pluviometrie}</div>
                                        <div className="dataCell h">{monthData.ensoleillement}</div>
                                        <div className="dataCell jour" >{monthData.jours_gel}</div>
                                      </div>))

  return (
    <div className = "dataForCity">

      <div className ="meteoData">
            <div className="dataCell" >Période</div>
            <div className="dataCell" >Temp min</div>
            <div className="dataCell" >Temp max </div>
            <div className="dataCell" >Pluviométrie</div>
            <div className="dataCell" >Ensoleillement</div>
            <div className="dataCell">Jours de gel</div>
      </div>
      {weather}
    </div>
  );
};

export default WeatherTable;
