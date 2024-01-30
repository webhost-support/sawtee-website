import React from "react";
import {  styled } from "@emotion/styled";
import { Link } from "@inertiajs/react";

const Nav = ({ state }) => (
    <Container>
        {state.theme.menu.map(([name, link]) => (
            <Item key={name} isSelected={state.router.link === link}>
                <Link href={link}>{name}</Link>
            </Item>
        ))}
    </Container>
);

export default Nav;

const Container = styled.nav`
    list-style: none;
    display: flex;
    width: 848px;
    max-width: 100%;
    box-sizing: border-box;
    padding: 0 24px;
    margin: 0;
    overflow-x: auto;
`;

const Item = styled.div`
    padding: 0;
    margin: 0 16px;
    color: #f1f1f1;
    font-size: 0.9em;
    box-sizing: border-box;
    flex-shrink: 0;

    & > a {
        display: inline-block;
        line-height: 2em;
        border-bottom: 2px solid
            ${({ isSelected }) => (isSelected ? "#fff" : "transparent")};
    }

    &:first-of-type {
        margin-left: 0;
    }

    &:last-of-type {
        margin-right: 0;

        &:after {
            content: "";
            display: inline-block;
            width: 24px;
        }
    }
`;
