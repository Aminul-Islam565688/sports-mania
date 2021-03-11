import React from 'react';

const Banner = ({img}) => {
    return (
        <div>
            <div className='banner-image'>
                <h1 className='banner-text'>Sports Mania</h1>
                <img src={img} alt=""/>
            </div>
        </div>
    );
};

export default Banner;