import React, { useState, useEffect } from 'react';
import datameteo from '../data/meteoDataByCity.js';
import Chooseville from './chooseville.component.jsx';
import WeatherTable from './weathertable.component.jsx';
import Favo from './favo.component.jsx';
import ComparisonTable from './comparaison.component.jsx';
import ChartZone from './chartZone.component.jsx';

const App = () => {
  const [selectedCity, setSelectedCity] = useState(datameteo[0].city);
  const [favoriteCity, setFavoriteCity] = useState(datameteo[0].city);
  const [chartData, setChartData] = useState(null);


  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const handleToggleFavorite = () => {
      setFavoriteCity(selectedCity);
    
  };

  const selectedCityData = datameteo.find((data) => data.city === selectedCity);
  const favoriteCityData = datameteo.find((data) => data.city === favoriteCity);

  return (
    <div>
      <Chooseville
        options={datameteo.map((data) => data.city)}
        onSelectCity={handleCityChange}
      />
      <Favo
        isFavorite={favoriteCity === selectedCity}
        onToggleFavorite={handleToggleFavorite}
      />
      {selectedCityData && <WeatherTable cityData={selectedCityData} />}
      {selectedCityData && favoriteCityData && (
        <ComparisonTable
          selectedCityData={selectedCityData}
          favoriteCityData={favoriteCityData}
        />
      )}
      {selectedCityData && favoriteCityData && (
        <ChartZone selectedCity={selectedCityData} favoriteCity={favoriteCityData} />
      )}
    </div>
  );
};

export default App;
