import { createContext, useState} from "react";

export const  UserContext = createContext();

 export const UserContextProvider = ({children})=>{
    const [user,setUser] = useState(undefined)
    

   const login = () =>{
       setUser("Hola")
   }
   const logout = () =>{
       setUser(undefined)
   }

        return(
         <UserContext.Provider value={{user,login,logout}}>
                      {children}
         </UserContext.Provider >


        )
}