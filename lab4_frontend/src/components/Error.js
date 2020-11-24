import React from 'react';
import {connect} from "react-redux";

export class Error extends React.Component {
    render() {
        return (
            <p style={{color: "red", textAlign: "center"}}>{this.props.message}</p>
        )
    }
}

function mapStateToProps(state) {
    return {
        message: state.userReducer.errorMsg,
    }
}

export default connect(mapStateToProps, null)(Error);