import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Components/Common/Nav/Nav'

function App() {

  return (
     <div>
       <Nav/>
       <Outlet></Outlet>
     </div>
  )
}

export default App
