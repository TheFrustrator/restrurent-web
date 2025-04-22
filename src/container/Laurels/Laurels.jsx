import React from 'react';
import { assets, wines ,cocktails ,awards} from '../../assets/assets';

import SubHeading from '../../Components/SubHeading/SubHeading';
import MenuItem from '../../components/Menuitem/MenuItem'

const AwardCard =({award:{imgUrl,title,subtitle}})=>(
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt='award'/>
    <div className="app__laurels_awards-card_content">
    <p className="p__cormorant" style={{color:'#DCCA87'}}>{title}</p>
    <p className="p__cormorant" >{subtitle}</p>
    </div>
  </div>
)


import './Laurels.css';

const Laurels = () => (
  <div className='app__bg app__wrapper section__paddin' id='awards'>
    <div className="app__wrapper_info">
    <SubHeading title='Awards & recognition' />
    <h1 className="headtext__cormorant">Our Leurel</h1>

      <div className="app__laurels_awards">
        {awards.map((award)=><AwardCard award={award}/>)}
      </div>
    </div>
    <div className="app__wrapper_img">
    <img src={assets.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
