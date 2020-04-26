import React from 'react';
import style from './beers.module.css';

const Beer = ({name, description, image}) => {
    return (
        <div className={style.beer}>
            <h1>{ name }</h1>
            <img className={style.image}  src={image} alt="" />
        </div>
    );


}

export default Beer;