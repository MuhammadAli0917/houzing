import React from 'react';
import {Container, Wrapper, Section, Logo, Link, Main} from "./style";
import {Outlet, useNavigate} from "react-router-dom"
import logoImg from "../../assets/images/logo.svg"
import {navbar} from "../../utils/navbar";
import Button from "../../Generics/Button";

function Index(props) {
    const navigate = useNavigate()
    return (
        <Container>
            <Main>
                <Wrapper>
                    <Section onClick={() => navigate("/home")} logo>
                        <Logo src={logoImg} />
                        <h2>Houzing</h2>
                    </Section>
                    <Section>
                        {navbar.map(({path, title, hidden}, index) => {
                            return !hidden && <Link className={({isActive}) => isActive && "active"} to={path} key={index}>{title}</Link>
                        })}
                    </Section>
                    <Section>
                        <Button type={"dark"} onClick={() => navigate("/signin")}>Sign In</Button>
                    </Section>
                </Wrapper>
            </Main>
            <Outlet />
        </Container>
    );
}

export default Index;