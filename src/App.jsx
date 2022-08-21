
import './App.css'
import Films from './components/Films/Films'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import {UserContextProvider } from './context/context'

const App = () => {
 

  return (
    <div className="App">
      
     <UserContextProvider>
       <Header />      
       <Films />
       <Footer />
     </UserContextProvider>
     

    </div>
  )
}

export default App
