import React from 'react'
import "./App.css"
import DownloadIcon from '@mui/icons-material/Download';
import Navbar from './components/Navbar';
import SampleScore from './components/SampleScore';

function App() {
  return (
    <>
    <div className="mx-12 border">
      <div className="flex mt-28 mx-10  gap-96 space-x-96">
        <div className="text-xl font-semibold  mr-28"> Interview Report</div>
        <div className=" text-xl font-semibold"><DownloadIcon/> Download</div>
      </div>

      <div className="bg-blue-200">
        <Navbar/>
        <div className="flex">
          <SampleScore/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
