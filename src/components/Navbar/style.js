import styled from "styled-components"
import {NavLink} from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Main = styled.div`
  display: flex;
  justify-content: center;
  background: var(--colorPrimary);
`

export const Wrapper = styled.div`
  background: var(--colorPrimary);
  color: #fff;
  padding: var(--padding);
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  font-size: 16px;
`

export const Section = styled.div`
  display: flex;
  justify-content: center;
  cursor: ${({logo}) => logo && "pointer"};

  h3 {
    height: 16px;
    color: #fff;
  }
  
  .active {
    color: #45e845;
  }
`

export const Logo = styled.img`
  width: 30px;
  margin-right: 12px;
`

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: #fff;
`