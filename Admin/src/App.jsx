import React from 'react'
import './App.css'
import Main from './Component/Main'
import { BrowserRouter as Router,  Route, Routes} from "react-router-dom";
import Stdetails from './Component/Stdetails';

function App() {
  return (
<>

<Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Stdetail/:id' element={<Stdetails/>}/>
      </Routes>
    </Router>
     </>
  )
}

export default App