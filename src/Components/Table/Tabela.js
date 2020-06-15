import React, {Component} from "react";


const TableHead = () => {
    return(
        <thead>
        <tr>
            <th>Autores</th>
            <th>Livros</th>
            <th>Preços</th>
            <th>Remover</th>
        </tr>
        </thead>
    );
}

const TableBody = props =>{
    const linhas = props.autores.map((linha) => {
        return(
            <tr key={linha.id}>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button className="waves-effect waves-light btn" onClick={ ()=>{props.removeautor(linha.id) }} >Remover</button></td>
            </tr>
        );
    });

    return(
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela extends Component{
    render(){
        const { autores, removeautor } = this.props;

        return (
            <table className="centered highlight">
                <TableHead/>
                <TableBody autores={autores} removeautor={removeautor}/>
            </table>
        );
    }
}

export default Tabela;