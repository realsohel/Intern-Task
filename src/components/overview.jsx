import React from 'react'
import SampleScore from './sample-score'
import HiringTeam from './hiring-team'

const Overview = () => {
    return (
    <>
        <div className="flex bg-blue-100">
            <SampleScore/>
            <HiringTeam/>
        </div>
    </>
    )
}

export default Overview
