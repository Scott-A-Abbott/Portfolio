import React from 'react';
import splash from '../assets/images/landing/Head.jpg';

export default props =>{
    return(
        <div className='landing-img'id="landing">
        <h1 style={{position: 'absolute', color:'white', top: '100px'}}>PORTFOLIO</h1>
        <img src={splash} alt="landing imd"/>
        </div>
    );
}