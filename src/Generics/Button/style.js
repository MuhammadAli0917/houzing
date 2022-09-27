import styled from "styled-components";

const getType = ({type}) => {
    switch (type) {
        case "primary": return {
            background: "#0061DF",
            border: "none",
            color: "#fff"
        }
        case "dark": return {
            background: "transparent",
            border: "1px solid #fff",
            color: "#fff"
        }
        case "light": return {
            background: "#fff",
            border: "1px solid #E6E9EC",
            color: "#0D263B"
        }
        default: return {
            background: "#0061DF",
            border: "none",
            color: "#fff"
        }
    }
}

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 2px;
  min-width: 120px;
  font-size: ${({fontSize}) => fontSize ? `${fontSize}px` : "14px"};
  width: ${({width}) => width ? `${width}px` : "130px"};
  height: ${({height}) => height ? `${height}px` : "44px"};
  ${getType}
  :active{
    opacity: 0.7;
  }
`