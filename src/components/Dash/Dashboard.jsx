import React from 'react'
import Croping from '../../Pages/Camera/Croping'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import Slide from '../Slide/Slide'

const Dashboard = () => {
  return (
    <div>
        <Slide/>
      <Croping/>
      <ProfileDetails/>
    </div>
  )
}

export default Dashboard