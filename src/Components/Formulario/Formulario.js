import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));



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
            <form className={useStyles.root}>
                <Grid container spacing={2} alignItems={'center'}>
                    <Grid item>
                        <TextField  label="Autor" variant="outlined" type="text" id="nome" onChange={this.escutadorDeInput} name="nome" value={nome}/>
                    </Grid>
                    <Grid item>
                        <TextField  label="Livro" variant="outlined" type="text" id="livro" onChange={this.escutadorDeInput} name="livro" value={livro}/>
                    </Grid>
                    <Grid item>
                        <TextField  label="Preço" variant="outlined" type="text" id="preco" onChange={this.escutadorDeInput} name="preco" value={preco}/>
                    </Grid>
                    <Grid item>
                        <Button variant={"contained"} color={"primary"} onClick={this.submitFormulario}>Salvar</Button>
                    </Grid>
                </Grid>

            </form>
        );
    }
}

export default Formulario;