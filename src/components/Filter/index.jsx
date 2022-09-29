import React, {useRef} from 'react';
import {Container, Icons, MenuWrapper, Section} from "./style";
import {Button, Input} from "../../Generics";
import {Dropdown} from "antd"
import {useLocation, useNavigate} from "react-router-dom";
import {uzeReplace} from "../../hooks/useReplace";
import useSearch from "../../hooks/useSearch";

function Filter() {

    const navigate = useNavigate()
    const location = useLocation()
    const query = useSearch()

    const countryRef = useRef()
    const regionRef = useRef()
    const cityRef = useRef()
    const zipCodeRef = useRef()
    const roomsRef = useRef()
    const sizeRef = useRef()
    const sortRef = useRef()
    const maxPriceRef = useRef()
    const minPriceRef = useRef()

    const onChange = ({target: {name, value}}) => {
        navigate(`${location?.pathname}${uzeReplace(name, value)}`)
    }

    const menu = <MenuWrapper>
        <h1 className="subTitle">Address</h1>
        <Section>
            <Input defaultValue={query.get("country")} onChange={onChange} name="country" ref={countryRef} width={200} placeholder="Country" />
            <Input defaultValue={query.get("region")} onChange={onChange} name="region" ref={regionRef} width={200} placeholder="Region" />
            <Input defaultValue={query.get("city")} onChange={onChange} name="city" ref={cityRef} width={200} placeholder="City" />
            <Input defaultValue={query.get("zip_code")} onChange={onChange} name="zip_code" ref={zipCodeRef} width={200} placeholder="Zip Code" />
        </Section>
        <h1 className="subTitle">Apartment Info</h1>
        <Section>
            <Input defaultValue={query.get("rooms")} onChange={onChange} name="room" ref={roomsRef} width={200} placeholder="Rooms" />
            <Input defaultValue={query.get("size")} onChange={onChange} name="size" ref={sizeRef} width={200} placeholder="Size" />
            <Input defaultValue={query.get("sort")} onChange={onChange} name="sort" ref={sortRef} width={200} placeholder="Sort" />
        </Section>
        <h1 className="subTitle">Price</h1>
        <Section>
            <Input defaultValue={query.get("max_price")} onChange={onChange} name="max_price" ref={maxPriceRef} width={200} placeholder="Max price" />
            <Input defaultValue={query.get("min_price")} onChange={onChange} name="min_price" ref={minPriceRef} width={200} placeholder="Min price" />
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
                trigger="click"
            >
                <div><Button type="light"><Icons.Filter /> Advanced</Button></div>
            </Dropdown>
            <Button><Icons.Search /> Search</Button>
        </Container>
    </>
    );
}

export default Filter;