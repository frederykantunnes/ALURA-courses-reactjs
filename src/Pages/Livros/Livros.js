import React, {Component, Fragment} from "react";
import 'materialize-css/dist/css/materialize.css';
import Header from "../../Components/Header/Header";
import APIService from "../../Utils/APIService";
import PopUp from "../../Utils/PopUp";

const TableHead =  () => {
    return (
        <thead>
        <tr>
            <th>Livro</th>
        </tr>
        </thead>
    );
}


const TableFull =  props => {

    const linhas = props.livros.map((linha) => {
        return(
            <tr key={linha.id}>
                <td>{linha.livro}</td>
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


class Livros extends Component{


    constructor(props) {
        super(props);
        this.state = {
            autores: [],
        };
    }

    componentDidMount(): void {
        APIService.ListaLivros()
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
                    <h1>Lista de Livros</h1>
                    <TableFull livros={this.state.autores} />
                </div>
            </Fragment>
        );
    }
}
export default Livros;