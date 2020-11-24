import React from "react";
import {Header} from "../components/Header";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Canvas from "./Canvas";
import Inputs from "./Inputs";
import Table from "../components/Table";
import LogoutButton from "../components/LogoutButton";

export default class SecondPage extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Header/>
                </Row>
                <Row style={{marginBottom: '5%'}}>
                    <Col>
                        <Canvas/>
                    </Col>
                    <Col>
                        <Inputs/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table/>
                    </Col>
                </Row>
                <Row>
                    <Col className={"d-flex justify-content-center"}>
                        <LogoutButton/>
                    </Col>
                </Row>
            </Container>
        )
    }
}