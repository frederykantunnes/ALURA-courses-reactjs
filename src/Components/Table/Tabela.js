import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from "@material-ui/core/Button";

const CellDelete = ({removerFunc, id})=>{
    if (!removerFunc){
        return null;
    }
    if(!id){
        return <TableCell>Excluir Registro</TableCell>
    }
    return(
        <TableCell>
            <Button
                onClick={ ()=>{removerFunc(id) }}
                color="primary"
                variant="contained">Remover</Button>
        </TableCell>
    );
};

const Tabela = props =>{
        const { dados, removerFunc , colunas } = props;

        return (
            <Table>
                <TableHead>
                    <TableRow>
                        {
                            colunas.map(coluna=>{
                                return(
                                    <TableCell>{coluna.title}</TableCell>
                                );
                            })
                        }
                        <CellDelete removerFunc={removerFunc} />
                    </TableRow>
                </TableHead>
                <TableBody>
                        {
                                dados.map(dado=>{
                                    return (
                                        <TableRow>
                                            {
                                                colunas.map(coluna=>{
                                                    return  <TableCell>{dado[coluna.data]}</TableCell>
                                                })
                                            }
                                            <CellDelete removerFunc={removerFunc} id={dado.id} />
                                        </TableRow>
                                    );
                                })
                        }
                </TableBody>
            </Table>
        );
}

export default Tabela;