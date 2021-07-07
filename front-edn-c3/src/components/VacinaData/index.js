import React,{useState,useEffect,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {getUnidade} from '../../services/Axios'
import MyContext from '../../contexts/myContext'



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: 0,
    minWidth: "100%",
  },
}));


export default function VacinaData() {
  const classes = useStyles();
    const [Value1, setValue1] = useState('');
    const [Value2, setValue2] = useState('');
    const [Value3, setValue3] = useState('');
    const [Unidades,setUnidades] = useState([]); 
    const [DataDisponiveis,setDataDisponiveis] = useState([]); 
    const [HoraDisponiveis,setHoraDisponiveis] = useState([]); 

    const {unidade, setUnidade,
          Data, setData,Hora, setHora}= useContext(MyContext);

    useEffect(async () => {
     try {
        let a = await getUnidade();
        setUnidades(a);
     } catch (error) {
       
     }
       
    
    }, []);
    const handleChange1 = (event) => {
      setUnidade(event.target.value);
      setValue1(event.target.value);
    };
    const handleChange2 = (event) => {
      console.log(event.target.value);
      setData(event.target.value);
      setValue2(event.target.value);
    };
      const handleChange3 = (event) => {
        setHora(event.target.value);
      setValue3(event.target.value);
    };
   
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Selecione Unidade Saude
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Unidade de saude</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className={classes.select}
          value={Value1}
          onChange={handleChange1}
        >
         <MenuItem value="">
            <em>None</em></MenuItem>
          {Unidades.map((row) => (
            <MenuItem value={row._id}> {row.nome}</MenuItem> 
          ))}
        </Select>
        </FormControl>

        </Grid>
        
        <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Datas Disponiveis</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className={classes.select}
          value={Value2}
          onChange={handleChange2}
        >
         <MenuItem value="">
            <em>None</em></MenuItem>
          {DataDisponiveis.map((row) => (
            <MenuItem value={row._id}> {row.data}</MenuItem> 
          ))}
        </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Horarios Disponiveis</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className={classes.select}
          value={Value3}
          onChange={handleChange3}
        >
         <MenuItem value="">
            <em>None</em></MenuItem>
          {HoraDisponiveis.map((row) => (
            <MenuItem value={row._id}> {row.hora}</MenuItem> 
          ))}
        </Select>
        </FormControl>
      </Grid>

       

</Grid >
       
    </React.Fragment>
  );
}