import React, {useState} from 'react';

import './App.css';
import {Display} from "./Components/Display";
import {Button} from "./Components/Button";

function App() {

    const minValue = 0;
    const maxValue = 5;
    const [num, setNum] = useState<number>(minValue);

    const incClick = () => {
        if (num !== maxValue) {
            setNum(num + 1);
        }
    }

    const resetClick = () => {
        setNum(minValue);
    }

    return (
        <div className="App">
            <Display num={num} maxValue={maxValue}/>
            <Button disabled={num === maxValue} name={'inc'} callBack={incClick}/>
            <Button disabled={num === minValue} name={'reset'} callBack={resetClick}/>
        </div>
    );
}

export default App;
