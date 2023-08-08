import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
      id: 1,
      title: 'E-Commerce',
      img:'../../public/img/paginaDh.JPG',
      description: 'Proyecto integrador grupal del curso de Digital House, es un E-commerce funcional que nos llevo 6 meses hacerlo ya que en proceso aprendimos a usar las tecnologias, tiene un login de usuarios, un usuario especial para administrador, buscador, filtro, utilizamos la base de datos de MySqlWorbench, node, express, react, etc',
      tec:[
        '../../public/img/icons/iconHtml.png',
        '../../public/img/icons/iconCss.png',
        '../../public/img/icons/iconJs.png',
        '../../public/img/icons/iconReact.png',
        '../../public/img/icons/iconNode.png'
      ]
    },
    {
      id: 2,
      title: 'Proyecto 2',
      img:'../../public/img/paginaZapas.jpg',
      description: 'Descripción del proyecto 2',
      tec:[]
    },
    {
      id: 2,
      title: 'Proyecto 2',
      img:'../../public/img/paginaZapas.jpg',
      description: 'Descripción del proyecto 2',
      tec:[]
    },
    {
      id: 2,
      title: 'Proyecto 2',
      img:'../../public/img/paginaZapas.jpg',
      description: 'Descripción del proyecto 2',
      tec:[]
    }
  ];

export const projectCard = createSlice({
    name:'card',
    initialState,
    reducers:{
        addProyect: (state,action)=>{
            state.push(action.payload);
        }
    }
})

export const {addProject} = projectCard.actions;
export default projectCard.reducer;