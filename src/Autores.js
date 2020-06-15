import React, {Component, Fragment} from "react";
import 'materialize-css/dist/css/materialize.css';
import Header from "./Header";



const TableHead =  () => {
    return (
        <thead>
        <tr>
            <th>Lista de Autores</th>
        </tr>
        </thead>
    );
}


const TableFull =  props => {

    const linhas = props.autores.map((linha, index) => {
        return(
            <tr key={index}>
                <td>{linha.nome}</td>
            </tr>
        );
    });

    return (
        <table>
            <TableHead/>
            <tbody>
            {linhas}
            </tbody>
        </table>
    );
}


class Autores extends Component{

    state = {
        autores: [
            {
                nome:"Paulo",
                livro: "React",
                preco: "1000"
            },
            {
                nome:"Jose",
                livro: "React",
                preco: "1300"
            },
            {
                nome:"Mario",
                livro: "React",
                preco: "1230"
            },
            {
                nome:"Mario",
                livro: "React",
                preco: "1230"
            },
        ],
    };

    render() {
        return (
            <Fragment>
                <Header></Header>
                <div className="container">
                    <h1>Autores</h1>
                    <TableFull autores={this.state.autores} />
                </div>
            </Fragment>
        );
    }
}

export default Autores;