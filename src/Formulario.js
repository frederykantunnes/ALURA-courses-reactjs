import React, {Component} from "react";



class Formulario extends Component{

    constructor(props) {
        super(props);
        this.stateInicial = {
            nome:'',
            livro:'',
            preco:''
        }
        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {
        const {name, value} = event.target;
        this.setState({
            [name]:value
        })
    }

    submitFormulario = () => {
        this.props.adicionar(this.state);
        this.setState(this.stateInicial);
    }

    render() {
        const {nome, livro, preco} = this.state;
        return (
            <form>
                <div className="row">
                    <div className="col s4">
                        <label htmlFor="nome">Nome</label>
                        <input className="validate" type="text" id="nome" onChange={this.escutadorDeInput} name = "nome" value={nome}/>
                    </div>
                    <div className="col s4">
                        <label htmlFor="livro"> Livro</label>
                        <input className="validate" type="text" id="livro" onChange={this.escutadorDeInput} name = "livro" value={livro}/>
                    </div>
                    <div className="col s4">
                        <label htmlFor="nome"> Preço</label>
                        <input className="validate" type="text" id="preco" onChange={this.escutadorDeInput} name = "preco" value={preco}/>
                    </div>
                </div>
                <button type="button" className="waves-effect waves-light btn" onClick={this.submitFormulario}>Salvar</button>
            </form>
        );
    }
}

export default Formulario;