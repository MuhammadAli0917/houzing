import React from 'react';
import {Container} from "./style";

function Button({type, onClick, children}) {
    return (
        <Container onClick={onClick} type={type}>{children}</Container>
    );
}

export default Button;