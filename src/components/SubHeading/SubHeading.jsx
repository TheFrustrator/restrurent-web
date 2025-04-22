import React from 'react'
import { assets } from '../../assets/assets'

const SubHeading = ({title}) => {
  return (
    <div style={{marginBottom:'1rem'}}>
      <p className="p__cormorant">{title}</p>
      <img src={assets.spoon} alt="spoon" className='spoon__img' />
    </div>
  )
}

export default SubHeading