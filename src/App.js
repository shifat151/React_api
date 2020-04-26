import React, { useEffect, useState } from 'react';
import './App.css';
import Beer from './Beer'

const App = () => {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getBeers();
  }, [search])

  const getBeers = async () => {
    if (search === '') {
      const response = await fetch(`https://api.punkapi.com/v2/beers?`);
      const data = await response.json();
      setBeers(data);
      console.log(data);
    }
    else {
      const response = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${search}`);
      const data = await response.json();
      setBeers(data);
      console.log(data);
    }


  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  return (
    <div className="App">

      <form className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
      </form>

      <div className="beers">
        {
          beers.map(beer => (
            <Beer key={beer.id}
              name={beer.name}
              description={beer.description}
              image={beer.image_url}
            />
          ))
        }
      </div>


    </div>

  );
}

export default App;
