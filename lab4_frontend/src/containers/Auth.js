import React from "react";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import Error from "../components/Error";
import history from "../utils/history";
import {connect} from "react-redux";
import {setError, setLogin} from "../actions/userActions";
import {addPoint} from "../actions/pointsActions";
import LoginRegistrationChoose from "../components/LoginRegistrationChoose";

export class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        };
    }

    render() {
        return (
            <div>
                <Row style={{marginBottom: "5%"}}>
                    <Col className={"d-flex justify-content-center"}>
                        <LoginRegistrationChoose/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col className={"d-flex justify-content-center"} style={{marginBottom: "2%"}}>
                                <label>
                                    <h5>Логин</h5>
                                    <InputText autoComplete="off" id="username" value={this.state.username}
                                               onChange={(e) => this.setState({username: e.target.value})}
                                               name={"login"}/>
                                </label>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={"d-flex justify-content-center"} style={{marginBottom: "2%"}}>
                                <label>
                                    <h5>Пароль</h5>
                                    <InputText type={"password"} id="password" value={this.state.password}
                                               onChange={(e) => this.setState({password: e.target.value})}
                                               name={"password"}/>
                                </label>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Error/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={"d-flex justify-content-center"}>
                                <Button label={this.props.type} type={"submit"}
                                        onClick={() => this.callServer(this.state.username, this.state.password)}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }

    callServer(login, password) {
        if (!this.validate(login, password)) return;

        let details = {
            "login": login,
            "password": password
        };

        const formBody = Object.keys(details).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(details[key])).join("&");

        let url;
        if (this.props.type === "Зарегестрироваться") {
            url = "http://127.0.0.1:8981/lab4/api/auth/signup"
        } else {
            url = "http://127.0.0.1:8981/lab4/api/auth/signin";
        }

        fetch(url, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: formBody
        }).then(response => {
            if (response.ok) {
                this.clearError();
                return response.json();
            } else {
                this.showError("Ошибка");
            }
        })
            .then(response => {
                for (let i = 0; i < response.points.length; i++) {
                    this.props.addPoint([response.points[i].x, response.points[i].y, response.points[i].r]);
                }
                this.props.setLogin(true);
                history.push("/lab4/app");
            })
            .catch(e => console.log(e));
    }

    validate(login, password) {
        let loginValidation = this.validateLogin(login);
        let passwordValidation = this.validatePassword(password);
        if (loginValidation && passwordValidation) {
            this.clearError();
            return true;
        }
        if (!loginValidation) {
            this.showError("Логин должен содержать от 4 до 20 символов");
        } else {
            if (!passwordValidation) {
                this.showError("Пароль должен содержать от 8 до 20 символов");
            }
        }
        return false;
    }

    validateLogin(login) {
        return !(login.length < 4 || login.length > 20);

    }

    validatePassword(password) {
        return !(password.length < 8 || password.length > 20);
    }

    showError(msg) {
        this.props.setError(msg);
    }

    clearError() {
        this.props.setError("");
    }
}

function mapStateToProps(state) {
    return {
        type: state.userReducer.isSignin,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setError: msg => dispatch(setError(msg)),
        setLogin: payload => dispatch(setLogin(payload)),
        addPoint: point => dispatch(addPoint(point))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);