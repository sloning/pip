import React from "react";
import FirstPage from "../containers/FirstPage";
import {Redirect, Route} from "react-router";
import SecondPage from "./SecondPage";
import history from "../utils/history";
import {Router, Switch} from "react-router-dom";
import {connect} from "react-redux";

export class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Switch>
                        <Route history={history} exact path='/lab4' component={FirstPage}/>
                        <PrivateRoute history={history} exact path='/lab4/app' isLogged={this.props.login}
                                      component={SecondPage}/>
                        <Route path="/" component={() => <div>page not found</div>}
                        />
                    </Switch>
                </div>
            </Router>
        )
    }
}

const PrivateRoute = ({component: Component, isLogged, ...rest}) => (
    <Route {...rest} render={(props) => (
        isLogged === true
            ? <Component {...props} />
            : <Redirect to="/"/>
    )}/>
)

function mapStateToProps(state) {
    return {
        login: state.userReducer.login
    }
}

export default connect(mapStateToProps, null)(App)