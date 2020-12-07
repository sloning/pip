import React from "react";
import FirstPage from "../containers/FirstPage";
import {Redirect, Route} from "react-router";
import SecondPage from "./SecondPage";
import history from "../utils/history";
import {Router, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {setLogin} from "../actions/userActions";

export class App extends React.Component {
    constructor(props) {
        super(props);

        let login = false;
        if (localStorage.getItem("login") === "true") {
            login = true;
            this.props.setLogin(true);
        }
        this.state = {
            isLoggedIn: login,
        }
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Switch>
                        <Route history={history} exact path='/lab4' component={FirstPage}/>
                        <PrivateRoute history={history} exact path='/lab4/app' isLogged={this.state.isLoggedIn}
                                      component={SecondPage}/>
                        <Route path="/" component={() => <div>page not found</div>}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

const PrivateRoute = ({component: Component, isLogged, ...rest}) => (
    <Route {...rest} render={props => (
        isLogged
            ? (<Component {...props} />)
            : (<Redirect to="/lab4"/>)
    )}/>
)

function mapStateToProps(state) {
    return {
        login: state.userReducer.login,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setLogin: payload => dispatch(setLogin(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)