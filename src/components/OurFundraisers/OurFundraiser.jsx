import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MobileComponent from '../OurFundraisers/MobileComponent'; // Import the mobile component
import WebComponent from '../OurFundraisers/WebComponent'; // Import the web component

const OurFundraisers = () => {
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

export default OurFundraisers;


