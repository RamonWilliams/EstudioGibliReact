import React,{ useContext } from 'react'
import logo from "../../assets/5aaa2144c8f575a8a83b5a3adab74001.png"
import "./Header.css"

import { UserContext } from '../../context/context'

const Header = () => {
  const {login,logout,user} = useContext(UserContext)
  
  return (
   
       <header className='header'>
         <div className='image'>
          <img src={logo} alt="Logo"/>
         </div>
         <div className='button'>
          
            {user!== undefined? 
             <>
             <h2>{user}</h2>
            <button onClick={()=>logout()}>Logout</button> 
            </>
            : <button onClick={()=>login()}>Login</button>
            }
           
        
        
         
         </div>
       </header>
 
  )
}

export default Header