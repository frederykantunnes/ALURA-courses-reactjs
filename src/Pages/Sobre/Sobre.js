import React, {Component, Fragment} from "react";
import 'materialize-css/dist/css/materialize.css';
import Header from "../../Components/Header/Header";

class Sobre extends Component{
    render() {
        return (
            <Fragment>
                <Header></Header>
                <div className="container">
                    <h1>Cursos Frederyk Antunnes</h1>
                    <h4>Site de Estudos da tecnologia React</h4>
                    <br/>
                </div>
            </Fragment>
        );
    }
}
export default Sobre;