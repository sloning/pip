import React from 'react';
import Container from 'react-bootstrap/cjs/Container';
import Row from 'react-bootstrap/cjs/Row';
import Col from 'react-bootstrap/cjs/Col';

export class Header extends React.Component {
    render() {
        return (
            <Container style={{marginBottom: "5%"}}>
                <Row>
                    <Col>
                        <h3 id="variant">Вариант: 6148</h3>
                    </Col>
                    <Col>
                        <h3 id="me" style={{float: "right"}}>Кузнецов Владислав, P3213</h3>
                    </Col>
                </Row>
            </Container>
        )
    }
}