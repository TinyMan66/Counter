import React from 'react';

type ButtonType = {
    name: string
    callBack: () => void
    disabled?: boolean
}

export const Button: React.FC<ButtonType> = ({name, callBack, disabled}) => {

    return (
        <button className="button" disabled={disabled} onClick={callBack}>{name}</button>
    );
};
