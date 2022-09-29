import React from 'react';
import {Container} from "./style";
import GenCarousel from "../Carousel";
import HouseCard from "../HouseCard";

function Index() {
    return (
        <Container>
            <GenCarousel></GenCarousel>
            {/*<HouseCard></HouseCard>*/}
        </Container>
    );
}

export default Index;