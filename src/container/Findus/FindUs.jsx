import React from 'react';
import { assets, wines, cocktails, awards } from '../../assets/assets';

import SubHeading from '../../Components/SubHeading/SubHeading';



const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
      <SubHeading title='Contact'/>
      <h1 className="headtext__cormorant" style={{marginBottom:'3rem'}}>Find Us</h1>

      <div className="app__wrapper-contant">
        <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className='p__cormorant' style={{color:'#DCCA87',margin:'2rem 0rem'}}>Opening Hours</p>
        <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button className='custom__button' style={{marginTop:'2rem'}}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={assets.findus} alt="" />
    </div>
  </div>
);

export default FindUs;
