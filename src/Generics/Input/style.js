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

export const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;
  border: 1px solid #e6e9ec;
  font-size: ${({fontSize}) => fontSize ? `${fontSize}px` : "14px"};
  width: ${({width}) => width ? `${width}px` : "100%"};
  height: ${({height}) => height ? `${height}px` : "44px"};
  outline: none;
  // ${getType}
  padding-left: ${({icon}) => (icon ? "35px" : "20px")};
  padding-right: 10px
`

export const Wrapper = styled.div`
  width: ${({width}) => width === 200 ? "fit-content" : "100%"};
  position: relative;
  display: flex;
  align-items: center;
`

export const Icon = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 20px;
  top: 50%;
  margin-top: ${({iconMT}) => iconMT && iconMT};
`