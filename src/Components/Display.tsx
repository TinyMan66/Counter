import React from 'react';

type DisplayType = {
    num: number
    maxValue: number
}
export const Display: React.FC<DisplayType> = ({num, maxValue}) => {
    return (
        <div className="display">
            <h1 className={num === maxValue ? "error" : ""}>{num}</h1>
        </div>
    );
};
