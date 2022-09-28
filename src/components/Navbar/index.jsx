import React from 'react';
import {Container, Wrapper, Section, Logo, Link, Main} from "./style";
import {Outlet, useNavigate} from "react-router-dom"
import logoImg from "../../assets/img/logo.svg"
import {navbar} from "../../utils/navbar";
import Button from "../../Generics/Button";
import Filter from "../Filter";

function Index() {
    const navigate = useNavigate()
    return (
        <Container>
            <Main>
                <Wrapper>
                    <Section onClick={() => navigate("/home")} logo>
                        <Logo src={logoImg} />
                        <h3>Houzing</h3>
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
            <Filter />
            <Outlet />
        </Container>
    );
}

export default Index;