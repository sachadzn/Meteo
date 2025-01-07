import React, { useState } from 'react';
import meteoDataByCity from '../data/meteoDataByCity.js';

const Chooseville = ({ onSelectCity }) => {
  const [cities, setCities] = useState(meteoDataByCity);

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    onSelectCity(selectedCity);
  };

  return (
    <select id="selectedCity" onChange={handleCityChange}>
                    <option value="">Sélectionnez une ville</option>
                            {cities.map((cityData, index) => (
                                  <option key={index} value={cityData.city}>
                                    {cityData.city}
                                  </option>
                            ))}
    </select>

  );
};

export default Chooseville;
