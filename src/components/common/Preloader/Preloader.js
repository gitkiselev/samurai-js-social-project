import React from 'react';
import preloader from '../../../assets/images/Spin-1s-200px.svg'; 
let Preloader = (props) => {
    return <div style={{backgroundColor: '#fff'}}>
            <img style={{width: '200px'}} src={preloader} alt='preloader' />
        </div>
    
}

export default Preloader;