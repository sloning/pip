import React from "react";
import {connect} from "react-redux";
import {isSignin} from "../actions/userActions";

export class LoginRegistrationChoose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            choice: "Войти"
        }
        this.setType = this.setType.bind(this);
        this.setType(this.state.choice);
    }

    render() {
        return (
            <div>
                {this.state.choice === "Войти" &&
                <div>
                    <span style={{fontSize: "20px"}}>Вход</span>
                    <span>/</span>
                    <span style={{textDecoration: "underline", fontSize: "20px"}}
                          onClick={() => this.setType("Зарегестрироваться")}>Регистрация</span>
                </div>
                }
                {this.state.choice === "Зарегестрироваться" &&
                <div>
                            <span style={{textDecoration: "underline", fontSize: "20px"}}
                                  onClick={() => this.setType("Войти")}>Вход</span>
                    <span>/</span>
                    <span style={{fontSize: "20px"}}>Регистрация</span>
                </div>
                }
            </div>
        )
    }

    setType(type) {
        this.setState({choice: type});
        this.props.isSignin(type);
    }
}

const mapDispatchToProps = dispatch => {
    return {
        isSignin: choice => dispatch(isSignin(choice))
    }
}

export default connect(null, mapDispatchToProps)(LoginRegistrationChoose);