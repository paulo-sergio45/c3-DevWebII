import React,{useState,useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Titulo from '../Titulo';
import {getAgendandamentos} from '../../services/Axios'

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});


export default function Numeros() {
  const classes = useStyles();


  const [Agendandamentos,setAgendandamentos] = useState([]); 
  const [AgendaUltima,setAgendaUltima] = useState([])
  useEffect(async () => {
   try {
      let a = await getAgendandamentos();
      let ultimadata = new Date(a[a.length-1].data_hora).toLocaleDateString();
      setAgendandamentos(a);
      setAgendaUltima(ultimadata)
   } catch (error) {
     
   }
     
  
  }, []);

  return (
    <React.Fragment>
      <Titulo>Total de agendamentos</Titulo>
      <Typography component="p" variant="h4">
      {Agendandamentos.length}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}> 
      {"Data do último agendamento \n"+ AgendaUltima }
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}