import React, {useRef} from 'react';
import {Container, Icons, MenuWrapper, Section} from "./style";
import {Button, Input} from "../../Generics";
import {Dropdown} from "antd"

function Filter() {
    const countryRef = useRef()
    const regionRef = useRef()
    const cityRef = useRef()
    const zipCodeRef = useRef()
    const roomsRef = useRef()
    const sizeRef = useRef()
    const sortRef = useRef()
    const maxPriceRef = useRef()
    const minPriceRef = useRef()

    const menu = <MenuWrapper>
        <h1 className="subTitle">Address</h1>
        <Section>
            <Input ref={countryRef} width={200} placeholder="Country" />
            <Input ref={regionRef} width={200} placeholder="Region" />
            <Input ref={cityRef} width={200} placeholder="City" />
            <Input ref={zipCodeRef} width={200} placeholder="Zip Code" />
        </Section>
        <h1 className="subTitle">Apartment Info</h1>
        <Section>
            <Input ref={roomsRef} width={200} placeholder="Rooms" />
            <Input ref={sizeRef} width={200} placeholder="Size" />
            <Input ref={sortRef} width={200} placeholder="Sort" />
        </Section>
        <h1 className="subTitle">Price</h1>
        <Section>
            <Input ref={maxPriceRef} width={200} placeholder="Max price" />
            <Input ref={minPriceRef} width={200} placeholder="Min price" />
        </Section>
        <h1 className="subTitle">Footer</h1>
        <Section></Section>
    </MenuWrapper>

    return (
        <>
        <Container>
            <Input
                icon={<Icons.Houses />}
                iconMT="1px"
                placeholder={'Enter an address, neighborhood, city, or ZIP code'}
            />
            <Dropdown
                overlay={menu}
                placement="bottomRight"
                arrow={{
                    pointAtCenter: true,
                }}
            >
                <div><Button type="light"><Icons.Filter /> Advanced</Button></div>
            </Dropdown>
            <Button><Icons.Search /> Search</Button>
        </Container>
    </>
    );
}

export default Filter;