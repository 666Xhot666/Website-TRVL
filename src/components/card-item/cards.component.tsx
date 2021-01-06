import React from 'react'

import { CardItem } from './card-item.component'

import './cards.css'

export const Cards: React.FC = () => {
  return (
    <div className="cards">
      <h1>Check out this EPIC Destinations!</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <div className="cards_items">
            <CardItem
              src="images/screen6.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/screen7.jpg"
              text="Explore the hidden waterfall deep inside the World Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/screen8.jpg"
              text="What is the world’s fastest supercomputer used for?"
              label="Sience"
              path="/services"
            />
          </div>
        </div>
      </div>
    </div>

  )
}
