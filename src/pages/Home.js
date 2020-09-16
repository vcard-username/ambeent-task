import React from 'react'

// [components/constants]
import Route from '../components/constant/Route';
import Notice from '../components/constant/Notice';
import {default as DWT} from '../components/constant/DefaultWorkTime';

// [component/shifts]
import ShiftList from '../components/shifts/ShiftList'

function Home() {
  return (
    <div className="home-container">
      <Route />
      <Notice />
      <DWT />
      <ShiftList />
    </div>
  )
}

export default Home
