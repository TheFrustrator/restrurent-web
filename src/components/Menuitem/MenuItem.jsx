import React from 'react'
import './MenuItem.css'


const MenuItem = ({ title, price, tags }) => {
  return (
    <div>
      <div className="app__menuitem">
        <div className="app__menuitem-head">
          <div className="app__menuitem-name">
            <p className='p_cormorant' style={{ color: '#DCCA87' }}>{title}</p>
          </div>

          <div className="app__menuitem-dash"></div>

          <div className="app__menuitem-price">
            <p className='p_cormorant' style={{ color: '#fff' }}>{price}</p>
          </div>
        </div>
        <div className="app__menuitem-sub">
          <p className='p_opensans' style={{ color: '#AAA' }}>{tags}</p>
        </div>
      </div>

    </div>
  )
}

export default MenuItem
