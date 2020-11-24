import React, {Component} from "react";
import {Header} from "../components/Header";
import Auth from "./Auth";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";

export default class FirstPage extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Header/>
                </Row>
                <Row className={"d-flex justify-content-center"}>
                    <Auth/>
                </Row>
            </Container>
        )
    }
}