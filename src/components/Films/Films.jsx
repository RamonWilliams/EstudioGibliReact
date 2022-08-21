import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect,useContext } from 'react';
import FilmsCard from '../FilmsCard/FilmsCard';
import "./Films.css"
import { UserContext } from '../../context/context';


const Films = () => {
    const [films,setFilms] = useState([]);
    const {user} = useContext(UserContext)
    const getFilms = async() =>{
        const rawData = await axios.get("https://ghibliapi.herokuapp.com/films")
        console.log(rawData)
        setFilms(rawData.data)
    }

  useEffect(()=>{
     getFilms()
  },[])


  return (
   <div className='film'>
      {user!== undefined? films.map((film)=>
      <FilmsCard key={film.id} film={film}/>) : <h2>Login please</h2>}
   </div>
   
  )
}

export default Films