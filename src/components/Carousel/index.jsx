import React, {useRef} from 'react';
import {Carousel} from "antd";
import {Container, Arrow, Img, Blur, Content} from "./style";
import img1 from  "../../assets/img/house1.png"
import img2 from  "../../assets/img/house2.png"

const contentStyle = {
    height: "160px",
    color: "fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79"
}

function GenCarousel() {
    const slider = useRef()

    const onChange = (currentSlide) => {
        console.log(currentSlide)
    }

    const onMove = ({target: {dataset: {name}}}) => {
        if (name === "left") slider.current.prev()
        if (name === "right") slider.current.next()
    }

    return (
        <Container>
            <Carousel ref={slider} afterChange={onChange}>
                <Img src={img1} />
                <Img src={img2} />
            </Carousel>
            <Blur />
            <Content>
                <Content.Title>Skyper Pool Partment</Content.Title>
                <Content.Desc className="subChild">
                    112 Glenwood Ave HydE Park, Boston, MA
                </Content.Desc>
                <Content.Price>5,250 / month</Content.Price>
            </Content>
            <Arrow onClick={onMove} data-name="left" left></Arrow>
            <Arrow onClick={onMove} data-name="right"></Arrow>
        </Container>
    );
}

export default GenCarousel;