import React from 'react'
import './App.css'
import Main from './Component/Main'
import Stdetails from './Component/stdetails'
import { BrowserRouter as Router,  Route, Routes} from "react-router-dom";

function App() {
  return (
<>

<Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/stdetail/:id' element={<Stdetails/>}/>
      </Routes>
    </Router>
     </>
  )
}

export default App