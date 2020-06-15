import React, {Component, Fragment} from "react";
import 'materialize-css/dist/css/materialize.css';
import Header from "./Header";

class NotFound extends Component{
    render() {
        return (
            <Fragment>
                <Header></Header>
                <div className="container">
                    <h1>Erro 404</h1>
                </div>
            </Fragment>
        );
    }
}

export default NotFound;