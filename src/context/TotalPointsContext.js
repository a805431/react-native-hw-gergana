import React, { useState } from 'react';

const TotalPointsContext = React.createContext();

export const PointsProvider = ({ children }) => {
    const [points, setPoints] = useState(0);

    const addUpPoints = () => {
        const randomNum = Math.floor(Math.random() * 6) + 1
        setPoints(points + randomNum);
    };

    return (
        <TotalPointsContext.Provider value={{data: points, addUpPoints}}>
            {children}
        </TotalPointsContext.Provider>
    );
};

export default TotalPointsContext;