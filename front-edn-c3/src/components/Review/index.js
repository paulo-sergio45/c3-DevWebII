import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import MyContext from '../../contexts/myContext'



export default function Review() {

  const {nome, setNome, email, setEmail,   Endereco, setEndereco,
    cpf, setCpf,telefone, setTelefone,unidade, setUnidade,
   dataNacimento, setdataNacimento,grupoPrioridade, setgrupoPrioridade,
   Data, setData,Hora, setHora}= useContext(MyContext);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Comfime os Dados
      </Typography>
      <List disablePadding>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
          <ListItem className="" key="aki">
            <ListItemText primary="Nome" secondary="" />
            <Typography variant="body2">{nome}</Typography>
          </ListItem>
          <ListItem className="" key="aki">
            <ListItemText primary="Email" secondary="" />
            <Typography variant="body2">{email}</Typography>
          </ListItem>
          <ListItem className="" key="aki">
            <ListItemText primary="Endereco" secondary="" />
            <Typography variant="body2">{Endereco}</Typography>
          </ListItem>
          <ListItem className="" key="aki">
            <ListItemText primary="cpf" secondary="" />
            <Typography variant="body2">{cpf}</Typography>
          </ListItem>
          <ListItem className="" key="aki">
            <ListItemText primary="telefone" secondary="" />
            <Typography variant="body2">{telefone}</Typography>
          </ListItem>
          
          </Grid>
          <Grid item xs={12} sm={6}>
          <ListItem className="" key="aki">
            <ListItemText primary="unidade" secondary="" />
            <Typography variant="body2">{unidade}</Typography>
          </ListItem>
          <ListItem className="" key="aki">
            <ListItemText primary="dataNacimento" secondary="" />
            <Typography variant="body2">{dataNacimento}</Typography>
          </ListItem>
          <ListItem className="" key="aki">
            <ListItemText primary="grupoPrioridade" secondary="" />
            <Typography variant="body2">{grupoPrioridade}</Typography>
          </ListItem>
          <ListItem className="" key="aki">
            <ListItemText primary="Data" secondary="" />
            <Typography variant="body2">{Data}</Typography>
          </ListItem>
          <ListItem className="" key="aki">
            <ListItemText primary="Hora" secondary="" />
            <Typography variant="body2">{Hora}</Typography>
          </ListItem>
         
          </Grid>
          </Grid>
          </List>
    </React.Fragment>
  );
}