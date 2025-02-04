import React from 'react'
import './main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
      <nav className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </nav>

      <section className="main-container">
        <div className="greet">
          <p><span>Hello Developer.</span></p>
          <p>How can i help you</p>
        </div>
        
        <section className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on a upcoming road trips</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Brifely summerize this conepts : urban planing</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstrome team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Immprove readability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </section>
      </section>

      <section className="main-bottom">
        <div className="search-bar">
          <input type="text" placeholder='Enter a prompt here'/>
          <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img src={assets.send_icon} alt="" />
          </div>
        </div>

      </section>
    </div>
  )
}

export default Main