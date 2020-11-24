import React from "react";
import {Button} from "react-bootstrap";
import history from "../utils/history";
import {clearPoints, removeR, setError} from "../actions/pointsActions";
import {setLogin} from "../actions/userActions"
import {connect} from "react-redux";

export class LogoutButton extends React.Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
        this.processLogout = this.processLogout.bind(this);
    }

    render() {
        return (
            <Button onClick={this.processLogout} variant="danger">Разлогиниться</Button>
        )
    }

    logout() {
        fetch("http://127.0.0.1:8981/lab4/api/auth/logout", {
            method: "POST",
            credentials: "include",
        }).catch(e => console.log(e));
    }

    processLogout() {
        history.push("/lab4");
        this.props.removeXYR();
        this.props.removeR();
        this.props.setLogin(false);
        this.props.setError("");
        this.logout();
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeXYR: () => dispatch(clearPoints()),
        removeR: () => dispatch(removeR()),
        setError: msg => dispatch(setError(msg)),
        setLogin: payload => dispatch(setLogin(payload))
    }
}

export default connect(null, mapDispatchToProps)(LogoutButton)