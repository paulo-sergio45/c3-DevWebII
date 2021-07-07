import React,{useState,useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Titulo from '../Titulo';
import {getAgendaTable} from '../../services/Axios'


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Agendamentos() {
  const classes = useStyles();

  const [agendaTable,setAgendaTable] = useState([]);

  useEffect(async () => {
   try {
      let a = await getAgendaTable();
      setAgendaTable(a);
   } catch (error) {
     
   }
     
  
  }, []);

  return (
    <React.Fragment>
      <Titulo>Agendamentos</Titulo>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data/Hora</TableCell>
            <TableCell>Cidadão</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell align="right">Unidade de Saude</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {agendaTable.map((row) => (
            <TableRow key={row._id}>
              <TableCell>
            {new Date(row.data_hora).toLocaleString()}</TableCell>
              <TableCell>{row.nome}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.telefone}</TableCell>
              <TableCell align="right">{row.nome_unidade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
         Ver mais agendamentos
        </Link>
      </div>
    </React.Fragment>
  );
}