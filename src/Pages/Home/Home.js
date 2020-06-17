import React, {Component, Fragment} from 'react';
import Tabela from "../../Components/Table/Tabela";
import Formulario from "../../Components/Formulario/Formulario";
import Header from "../../Components/Header/Header";
import PopUp from "../../Utils/PopUp";
import APIService from "../../Utils/APIService";

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            autores: [],
            columnTable:[{title:'Autor', data:'nome'},{title:'Livro', data:'livro'},{title:'Preço', data:'preco'}]
        };
    }


    removeAutor = id =>{

        APIService.RemoveAutor(id)
            .then(res=>APIService.TrataError(res))
            .then(res=>{
                if(res.message==='deleted'){
                    const { autores } = this.state;
                    this.setState(
                        {
                            autores : autores.filter((autor) =>{
                                return autor.id !== id;
                            }),
                        }
                    );
                    PopUp.exibeMensagem("sucesso", "Removido com sucesso");
                }else{
                    PopUp.exibeMensagem("erro", "Erro ao excluir");
                }
            })
            .catch(err=>PopUp.exibeMensagem("erro", "Erro ao excluir: "+err));
    };

    adicionar = autor => {
        APIService.CriaAutor(JSON.stringify(autor))
            .then(res=>APIService.TrataError(res))
            .then(res=>{
                if(res.message==='success'){
                    this.setState({
                        autores:[...this.state.autores, res.data]
                    });
                    PopUp.exibeMensagem("sucesso", "Adicionado com sucesso");
                }else{
                    PopUp.exibeMensagem("erro", res.message);
                }
            })
            .catch(err=>
                PopUp.exibeMensagem("erro", "Erro ao inserir: "+err)
            );
    }

    componentDidMount(): void {
        APIService.ListaAutores()
            .then(res=>APIService.TrataError(res))
            .then(res =>{
                if(res.message==='success'){
                    this.setState(
                        {autores : [...this.state.autores, ...res.data]}
                    )
                }else{
                    PopUp.exibeMensagem("erro", res.message);
                }
            })
            .catch(err => PopUp.exibeMensagem("erro", "Erro ao buscar dados"));
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <div className="container">
                    <h1>Cursos</h1>
                    <Formulario adicionar={this.adicionar} />
                    <Tabela dados={this.state.autores} removerFunc={this.removeAutor} colunas={this.state.columnTable}/>
                </div>
            </Fragment>
        );
    }




}

export default Home;