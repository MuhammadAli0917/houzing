import React, {forwardRef} from 'react';
import {Container, Icon, Wrapper} from "./style";

const Input = forwardRef(({type, iconMT, icon, placeholder, value, name, defaultValue, onChange, width, height}, ref) => {
    return (
        <Wrapper width={width}>
            <Icon iconMT={iconMT}>{icon}</Icon>
            <Container
                type={type}
                ref={ref}
                icon={icon}
                placeholder={placeholder}
                value={value}
                name={name}
                defaultValue={defaultValue}
                onChange={onChange}
                width={width}
                height={height}
            />
        </Wrapper>
    );
})
export default Input;