import React from 'react';
import { useState } from 'react';

import SolarPanel from './UI/SolarPanel';
import Battery from './UI/Battery';
import ProductionEstimate from './UI/ProductionEstimate';
import TotalCost from './UI/TotalCost';

import './App.css';
import MoneySaved from './UI/MoneySaved';


function App() {

  const [panelCount, setPanelCount] = useState(10);
  const [isBatteryAdded, setIsBatteryAdded] = useState(false);
  const [basePrice, setBasePrice] = useState(panelCount * 1000); // Base price without battery

  React.useEffect(() => {
    setBasePrice(panelCount*1000);
  }, [panelCount]);

  const toggleBattery = () => {
    setIsBatteryAdded(!isBatteryAdded);
  };

  const getTotalPrice = () => {
    return isBatteryAdded ? basePrice + 5 : basePrice;
  };


  return (
    <div>
      <div><SolarPanel panelCount = {panelCount} setPanelCount = {setPanelCount}/></div>
      <div> <Battery isBatteryAdded = {isBatteryAdded} toggleBattery = {toggleBattery}/></div>
      <div><ProductionEstimate /></div>
      <div><MoneySaved /></div>
      <div><TotalCost price = {getTotalPrice}/></div>
    </div>
  );
}

export default App;
