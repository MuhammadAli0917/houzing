import React from 'react';
import {Container} from "./style";
import {Button} from "../../Generics";
import {useNavigate} from "react-router-dom";

function Index() {
    const navigate = useNavigate()
    return (
        <Container>
            <h1>Home</h1>
            <Button onClick={() => navigate("/properties")}>Go to Properties</Button>
        </Container>
    );
}

export default Index;