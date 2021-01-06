import React from 'react'

import {Button} from '../button/button.component'

import './hero-section.css'

export const HeroSection: React.FC = () => {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted/>
      <h1>ADVENTURE AWAITS</h1>
      <p> What are you waiting for?</p>
      <div className="hero-btns">
        <Button  buttonStyle="btn--outline" buttonSize="btn--large" > GET  STARTED</Button>
        <Button  buttonStyle="btn--primary" buttonSize="btn--large" > WATCH TRAILER <i className="far fa-play-circle"/></Button>

      </div>
    </div>
  )
}
