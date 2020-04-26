import React, { useEffect, useState } from 'react';
import style from './beers.module.css';
import './App.css';


const BeerDetail = (match) => {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    getBeer();
  }, [])

  const getBeer = async () => {
    const response = await fetch(`https://api.punkapi.com/v2/beers/${match.match.params.id}`);
    const data = await response.json();
    setBeer(data);
    console.log(data);
  }




  return (
    <div className="App">
      <div className="beers">
        {
          beer.map(beer => (
            <div className={style.beer}>
              <h1>{beer.name}</h1>
              <img className={style.image} src={beer.image_url} alt=""/>
              <p>{beer.description}</p>
          
            </div>
            
          ))
        }

      </div>
    </div>


  );

};

export default BeerDetail;