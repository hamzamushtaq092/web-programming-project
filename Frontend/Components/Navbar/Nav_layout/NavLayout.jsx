import React from 'react'
import SideNav from '../Side_nav/sideNav'
import TopNav from '../Top_navbar/topNav'
import './NavLayout.css'

function navLayout() {
  return (
    <div className="layout">
      <TopNav />
      <div className="content">
        <div className="side-navbar">
          <SideNav /> 
        </div>
      </div>
    </div>
  )
}

export default navLayout

