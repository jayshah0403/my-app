import React from 'react';

import './SolarPanel.css';

const SolarPanel = ({panelCount, setPanelCount}) => {

    const handleSliderChange = (event) => {
        setPanelCount(Number(event.target.value));
    }

    return (
        <div>
            <h1 className='main-title'>How many solar panels do you need ?</h1>
            <div className='container'>
                <input
                    type="range"
                    min="1"
                    max="20"
                    value={panelCount}
                    onChange={handleSliderChange}
                    className='slider'
                />
                <span>{panelCount}</span>
            </div>
        </div>
    );
};

export default SolarPanel;