import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
      id: 1,
      title: 'E-Commerce',
      img:'public/img/paginaDh.jpg',
      description: 'Digital House integrative project, functional E-commerce developed in a group',
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
      title: 'Blog con Filtro',
      img:'public/img/BlogFilter.jpg',
      description: 'Blog creado con filtro, creado con React, Redux y bootstrap',
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
