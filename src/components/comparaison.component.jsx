import React from 'react';
import "../assets/style/dataComparison.style.css";
import "../assets/style/dataCell.style.css";

const DataComparison = ({ favoriteCityData, selectedCityData }) => {
  if (!selectedCityData || !favoriteCityData) {
    return <div>Données non disponibles</div>;
  }
  const selectedAvg = {
    minTemp: selectedCityData.data.reduce((acc, month) => acc + month.temp_min, 0) / selectedCityData.data.length,
    maxTemp: selectedCityData.data.reduce((acc, month) => acc + month.temp_max, 0) / selectedCityData.data.length,
    pluviometrie: selectedCityData.data.reduce((acc, month) => acc + month.pluviometrie, 0),
    ensoleillement: selectedCityData.data.reduce((acc, month) => acc + month.ensoleillement, 0),
    jours_gel: selectedCityData.data.reduce((acc, month) => acc + month.jours_gel, 0)
  };
  const favoriteAvg = {
    minTemp: favoriteCityData.data.reduce((acc, month) => acc + month.temp_min, 0) / favoriteCityData.data.length,
    maxTemp: favoriteCityData.data.reduce((acc, month) => acc + month.temp_max, 0) / favoriteCityData.data.length,
    pluviometrie: favoriteCityData.data.reduce((acc, month) => acc + month.pluviometrie, 0),
    ensoleillement: favoriteCityData.data.reduce((acc, month) => acc + month.ensoleillement, 0),
    jours_gel: favoriteCityData.data.reduce((acc, month) => acc + month.jours_gel, 0)
  };

  return (
    <div className="dataComparison">
      <div className="meteoData">
        <div className="dataCell favorite"></div>
        <div className="dataCell">Temp minimale</div>
        <div className="dataCell">Temp maximale</div>
        <div className="dataCell">Pluviométrie</div>
        <div className="dataCell">Ensoleillement</div>
        <div className="dataCell">Jours de gel</div>
      </div>
      <div className="meteoData ">
        <div className={`dataCell ${selectedCityData.city === favoriteCityData.city ? 'favorite' : ''}`}>
          {selectedCityData.city}
        </div>
        <div className="dataCell temperature">{selectedAvg.minTemp.toFixed(1)} </div>
        <div className="dataCell temperature">{selectedAvg.maxTemp.toFixed(1)} </div>
        <div className="dataCell mm">{selectedAvg.pluviometrie.toFixed(1)} </div>
        <div className="dataCell h">{selectedAvg.ensoleillement.toFixed(1)} </div>
        <div className="dataCell jour">{selectedAvg.jours_gel.toFixed(0)}</div>
      </div>
      <div className="meteoData favorite">
        <div className={`dataCell ${selectedCityData.city === favoriteCityData.city ? 'favorite' : ''}`}>
          {favoriteCityData.city}
        </div>
        <div className="dataCell temperature">{favoriteAvg.minTemp.toFixed(1)} </div>
        <div className="dataCell temperature">{favoriteAvg.maxTemp.toFixed(1)} </div>
        <div className="dataCell mm">{favoriteAvg.pluviometrie.toFixed(1)} </div>
        <div className="dataCell h">{favoriteAvg.ensoleillement.toFixed(1)} </div>
        <div className="dataCell jour">{favoriteAvg.jours_gel.toFixed(0)}</div>
      </div>
    </div>
  );
}

export default DataComparison;
