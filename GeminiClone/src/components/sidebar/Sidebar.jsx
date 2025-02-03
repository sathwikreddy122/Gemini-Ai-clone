import React from 'react'
import './sidebar.css'
import {assets} from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <img className = 'menu' src={assets.menu_icon} alt="Menu" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="add icon" />
          <p>New Chat</p>
        </div>
        <div className='recent'>
            <p className="recent-title">Recent</p>
            <div className='recent-entry'>
              <img src={assets.message_icon} alt="" />
              <p className="">What is react</p>
            </div>
          </div>
      </div>

      <div className="bottom">
        <div className='bottom-container recent-entry' >
          <img src={assets.question_icon} alt="" />
          <p className="">Help</p>
        </div>
        <div className='bottom-container recent-entry' >
          <img src={assets.history_icon} alt="" />
          <p className="">Activity</p>
        </div>
        <div className='bottom-container recent-entry' >
          <img src={assets.setting_icon} alt="" />
          <p className="">Settings</p>
        </div>
        
        

        

      </div>

    </div>
  )
}

export default Sidebar