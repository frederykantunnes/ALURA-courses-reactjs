import React, {Component, Fragment} from "react";
import Header from "../../Components/Header/Header";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useEstilos = makeStyles({
    titulo:{
        textAlign:'center',
        color:'blue'
    }
});
const Sobre = () => {
    const classes = useEstilos();
        return (
            <Fragment>
                <Header></Header>
                <Container maxWidth={"sm"}>
                    <Typography variant={"h1"} component={"h2"} className={classes.titulo}>Sobre</Typography>
                    <Typography variant={"body1"} component={"p"}>Dados sobre a casa do código</Typography>
                </Container>
            </Fragment>
        );
};
export default Sobre;