import React, {Component, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.css';
import Tabela from "./Tabela";
import Formulario from "./Formulario";
import Header from "./Header";
import PopUp from "./PopUp";
class App extends Component{

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

    removeAutor = index =>{

        const { autores } = this.state;

        this.setState(
            {
               autores : autores.filter((autor, posAtual) =>{
                   return posAtual !== index;
               }),
            }
        );
        PopUp.exibeMensagem("erro", "Removido com sucesso");
    };

    adicionar = autor => {

        this.setState({
            autores:[...this.state.autores, autor]
        })
        PopUp.exibeMensagem("sucesso", "Adicionado com sucesso");

    }


    render() {
        return (
            <Fragment>
                <Header/>
                <div className="container">
                    <h1>Cursos</h1>
                    <Tabela autores = {this.state.autores} removeautor={this.removeAutor}/>
                    <Formulario adicionar={this.adicionar} />
                </div>
            </Fragment>
        );
    }




}

export default App;