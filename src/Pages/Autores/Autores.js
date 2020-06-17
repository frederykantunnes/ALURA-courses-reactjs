import React, {Component, Fragment} from "react";
import 'materialize-css/dist/css/materialize.css';
import Header from "../../Components/Header/Header";
import APIService from "../../Utils/APIService";
import PopUp from "../../Utils/PopUp";
import Tabela from "../../Components/Table/Tabela";


class Autores extends Component{

    constructor(props) {
        super(props);
        this.state = {
            autores: [],
            colunas:[{title:"Autor", data:'nome'}]
        };
    }

    componentDidMount(): void {
        APIService.ListaNomes()
            .then(res=>APIService.TrataError(res))
            .then(res=>{
                if(res.message==='success'){
                    this.setState(
                        {
                            autores: [...this.state.autores, ...res.data]
                        }
                    )
                }else{
                    PopUp.exibeMensagem("erro", "Erro ao listar");
                }
            })
            .catch(err=>PopUp.exibeMensagem("erro", err));
    }

    render() {

        return (
            <Fragment>
                <Header></Header>
                <div className="container">
                    <h1>Autores</h1>
                    <Tabela dados={this.state.autores} colunas={this.state.colunas}/>
                </div>
            </Fragment>
        );
    }
}

export default Autores;