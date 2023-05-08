import React, { useEffect } from 'react'
import "./App.css"
import DownloadIcon from '@mui/icons-material/Download';
import Navbar from './components/Navbar';
import SampleScore from './components/SampleScore';
import HiringTeam from './components/HiringTeam';

function App() {

//   useEffect(() => {
//     window.scrollTo(0, 0)
// }, [])

  return (
    <>
    <div className="mx-12 ">
      <div className="fade-in flex mt-28 mx-10  gap-96 space-x-96">
        <div className="text-xl font-semibold  mr-28"> Interview Report</div>
        <div className=" text-xl font-semibold"><DownloadIcon/> Download</div>
      </div>

      <div className="bg-blue-100 ">
        <Navbar/>
        <div className="flex">
          <SampleScore/>
          <HiringTeam/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
