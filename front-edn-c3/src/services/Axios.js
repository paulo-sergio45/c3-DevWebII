import axios from 'axios'

// http://13.73.39.101:3000
// get unidade de saúde mongo -> /api/unisaude/
// get pessoa mongo -> /api/pessoa/
// get agenda mongo -> /api/agenda/

const api = axios.create({
  baseURL: 'http://13.73.39.101:3000/api/'
});

async function getAgendaTable() {
  try {
    const response = await api.get('/agenda');
    const response2 = await api.get("/pessoa", {
      params: { id: response.data.agenda.pessoa_id },
    });
    const response3 = await api.get("/unisaude", {
      params: { id: response.data.agenda.unisaude_id },
    });

const data = response.data.agenda.map((e) => {
  const usuario = response2.data.individuo.find(a => a._id == e.pessoa_id)
  const unidade = response3.data.unidades.find(b => b._id == e.unisaude_id)

  return ( { ...e, nome: usuario.nome, email: usuario.email, telefone: usuario.telefone, nome_unidade:unidade.nome})
})

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getAgendaChart() {
  try {
    const response = await api.get('/agenda');
    const data = response.data.agenda.map((e, index) => {
      return ( { time:new Date(e.data_hora).toLocaleString("pt-BR",{hour:"2-digit",minute:"2-digit"}), amount :index+1})
      });
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getAgendandamentos() {
  try {
    const response = await api.get('/agenda');
    return response.data.agenda;
  } catch (error) {
    console.log(error);
  }
}

async function getUnidade() {
  try {
    const response = await api.get('/unisaude');
    return response.data.unidades;
  } catch (error) {
    console.log(error);
  }
}


export  { getAgendaTable,getAgendaChart,getAgendandamentos,getUnidade };