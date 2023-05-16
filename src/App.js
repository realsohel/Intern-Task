import React, { useEffect } from 'react'
import "./App.css"
import DownloadIcon from '@mui/icons-material/Download';
import Navbar from './components/navbar';
// import SampleScore from './components/sample-score';
// import HiringTeam from './components/hiring-team';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Round1 from './components/round-1';
import Round2 from './components/round-2';
import Overview from './components/overview';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
}, [])

  return (
    <>
    <div className="md:mx-12 mx-4">
      <div className="fade-in flex mt-28 md:mx-10   md:gap-96 md:space-x-96">
        <div className="text-xl font-semibold  mr-28"> Interview Report</div>
        <div className=" text-xl font-semibold"><DownloadIcon/> Download</div>
      </div>

    <div className="bg-blue-100 ">

    
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path='/' element={<Overview/>}/>
        <Route exact path='/round1' element={<Round1/>}/>
        <Route exact path='/round2' element={<Round2/>}/>
      </Routes>
      </BrowserRouter>

    </div>
    </div>
    </>
  )
}

export default App
