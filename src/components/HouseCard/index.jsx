import React from 'react';
import noimg from '../../assets/img/noimg.jpeg';
import {Container, Content, Details, Img, Divider, Icons} from "./style";




const HouseCard = ({data = {}}) => {
    const {city, country, description, attachments, salePrice, price, address, houseDetails } = data
    return (
        <Container>
            <Img src={attachments && attachments[0]?.imgPath || noimg} />
            <Content>
                <div className="subTitle inline">{city}, {country}, {description}</div>
                <div className="info">{address || 'Quincy St, Brooklyn, NY, USA'}</div>
                <Details>
                    <Details.Item>
                        <Icons.Bed />
                        <div className="info">Bed {houseDetails?.beds || 0}</div>
                    </Details.Item>
                    <Details.Item>
                        <Icons.Bath />
                        <div className="info">Bath {houseDetails?.bath || 0}</div>
                    </Details.Item>
                    <Details.Item>
                        <Icons.Garage />
                        <div className="info">Garage {houseDetails?.garage || 0}</div>
                    </Details.Item>
                    <Details.Item>
                        <Icons.Ruler />
                        <div className="info">Area {houseDetails?.area || 0}kv m</div>
                    </Details.Item>
                </Details>
            </Content>
            <Divider />
            <Content footer>
                <Details.Item footer>
                    <div className='info'>${salePrice || 0}/mo</div>
                    <div className='subTitle'>${price || 0}/mo</div>
                </Details.Item>
                <Details.Item row>
                    <Icons.Resize />
                    <Icons.Love />
                </Details.Item>
            </Content>
        </Container>
    );
};

export default HouseCard;