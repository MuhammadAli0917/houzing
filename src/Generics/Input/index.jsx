import React from 'react';
import {Container} from "./style";

function Input({type, placeholder, value, name, defaultValue, onChange, width, height}) {
    return (
        <Container
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            defaultValue={defaultValue}
            onChange={onChange}
            width={width}
            height={height}
        />
    );
}

export default Input;