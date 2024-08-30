import React from 'react';

import './Battery.css'

const Battery = ({isBatteryAdded, toggleBattery}) => {
    return (
        <div className='battery-section' style={{cursor: 'pointer'}}>
            <div className="battery-icon-container" onClick={toggleBattery}>
                {isBatteryAdded ? (<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2 6h10v4H2z" />
                        <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8" />
                    </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm14 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8" />
                </svg>)}
            </div>
            <div className='battery-text'>
                <p className='battery-title'>Add battery</p>
                <p className='battery-description'>some text</p>
            </div>
        </div>
    );
};


export default Battery;