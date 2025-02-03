import React, { useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  const [extended, setExtended] = useState(false)

  function toggleMenu(){
    setExtended(prev => !prev)
  }

  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={toggleMenu} className='menu' src={assets.menu_icon} alt="Menu" />
        <div className="new-chat">
          <img  src={assets.plus_icon} alt="add icon" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? <div className='recent'>
          <p className="recent-title">Recent</p>
          <div className='recent-entry'>
            <img src={assets.message_icon} alt="" />
            <p className="">What is react</p>
          </div>
        </div> : null}
      </div>

      <div className="bottom">
        <div className='bottom-container recent-entry' >
          <img src={assets.question_icon} alt="" />
          {extended ?<p className="">Help</p> :null}
        </div>
        <div className='bottom-container recent-entry' >
          <img src={assets.history_icon} alt="" />
          {extended ? <p className="">Activity</p>:null}
        </div>
        <div className='bottom-container recent-entry' >
          <img src={assets.setting_icon} alt="" />
          {extended ? <p className="">Settings</p> : null}
        </div>





      </div>

    </div>
  )
}

export default Sidebar