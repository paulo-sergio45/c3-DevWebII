import React,{useState,useEffect,useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import MyContext from '../../contexts/myContext'

export default function UserData() {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const {nome, setNome, email, setEmail,   Endereco, setEndereco,
    cpf, setCpf,telefone, setTelefone,
    dataNacimento, setdataNacimento,grupoPrioridade, setgrupoPrioridade}= useContext(MyContext)

  const handleDateChange = (date) => {
    setdataNacimento(new Date(date).toLocaleDateString());
    setSelectedDate(date);
  };


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dados Usuario
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="Name"
            name="Name"
            label="Nome"
            fullWidth
            autoComplete="given-name"
            value={nome} onInput={e => setNome(e.target.value)}
          />
        </Grid>
       
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Endereço"
            fullWidth
            autoComplete="shipping address-line1"
            value={Endereco} onInput={e => setEndereco(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField id="email"
           name="email"
            label="Email"
            value={email} onInput={e => setEmail(e.target.value)}
             fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cpf"
            name="cpf"
            label="CPF"
            fullWidth
            autoComplete="cpf"
            value={cpf} onInput={e => setCpf(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="telefone"
            name="telefone"
            label="Telefone"
            fullWidth
            autoComplete="telefone"
            value={telefone} onInput={e => setTelefone(e.target.value)}
          />
        </Grid>
       
        <Grid item xs={12} sm={6}>

       <MuiPickersUtilsProvider utils={DateFnsUtils}>
       <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Data Nacimento"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}

        /></MuiPickersUtilsProvider>

        </Grid>
      
        <Grid item xs={6}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="salvaPessoa" value="yes" />}
            label="Grupo de prioridade"
            value={grupoPrioridade} onInput={e => setgrupoPrioridade(e.target.value)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}