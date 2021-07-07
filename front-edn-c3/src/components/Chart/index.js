import React,{useState,useEffect} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Titulo from '../Titulo';
import {getAgendaChart} from '../../services/Axios'



export default function Chart() {
  const theme = useTheme();


  const [agendaChart,setAgendaChart] = useState([]); 
  useEffect(async () => {
   try {
      let a = await getAgendaChart();
      setAgendaChart(a);
   } catch (error) {
     
   }
     
  
  }, []);


  return (
    <React.Fragment>
      <Titulo>Hoje </Titulo>
      <ResponsiveContainer>
        <LineChart
          data={agendaChart}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Agendamentos
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}