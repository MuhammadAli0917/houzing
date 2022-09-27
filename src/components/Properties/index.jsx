import React from 'react';
import {Container} from "./style";
import {Input} from "../../Generics";

function Index() {
    return (
        <Container>
            <h1>Properties Component</h1>
            <Input width="20px" placeholder="Enter your name"></Input>
        </Container>
    );
}

export default Index;