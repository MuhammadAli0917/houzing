import styled from "styled-components"
import {ReactComponent as arrow} from "../../assets/icons/arrow.svg";


export const Container = styled.div`
  position: relative;
  height: 571px;
`

export const Arrow = styled(arrow)`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 18px;
  background: rgba(255,255,255,0.2);
  transform: ${({left}) => !left ? "rotate(-90deg)" : "rotate(90deg)"};
  left: ${({left}) => left && "20px"};
  right: ${({left}) => !left && "20px"};
  :hover{
    background: rgba(255,255,255,0.4);
  }
  top: 50%;
  position: absolute;
`

export const Img = styled.img`
  width: 100%;
  height: 571px;
`

export const Blur  = styled.div`
  position: absolute;
  background: rgba(0,0,0,0.7);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
`

Content.Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #ffffff;
`

Content.Desc = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`

Content.Price = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;