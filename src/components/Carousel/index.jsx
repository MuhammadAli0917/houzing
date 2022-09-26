import React from 'react';
import Carousel from "./index";
import {Container} from "./style";

const contentStyle = {
    height: "160px",
    color: "fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79"
}

function GenCarousel() {
    const onChange = (currentSlide) => {
        console.log(currentSlide)
    }

    return (
        <Container>
            <Carousel afterChange={onChange}>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </Container>
    );
}

export default GenCarousel;