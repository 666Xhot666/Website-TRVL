import React from 'react'
import {Link} from 'react-router-dom'

interface ICardItemProps {
  src?: string,
  text?:string,
  label:string,
  path:string
}

export const CardItem: React.FC<ICardItemProps> = (props) => {
  return(<>
      <li className="cards_item">
        <Link  to={props.path} className="cards_item_link">
          <figure className="cards_item_pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Travel Image" className="cards_item_img"></img>
          </figure>
          <div className="cards_item_info">
            <h5 className="cards_item_text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>)
}
