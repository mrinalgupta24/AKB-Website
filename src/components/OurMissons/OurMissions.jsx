import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MobileComponent from './MobileComponent'; // Import the mobile component
import WebComponent from './WebComponent'; // Import the web component

const OurMissions = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <div>
            {isMobile ? (
                <MobileComponent />
            ) : (
                <WebComponent />
            )}
        </div>
    );
};

export default OurMissions;


