import React, { useState, useEffect } from "react";
import Pokemon from "./compnents/Pokemon";
import SearchPoke from "./compnents/SearchPoke";
import Title from "./compnents/Title";
import pokeb from "./pic/pokeb.jpeg";

function App() {
  const [pokemons, setPokemon] = useState({});

  const getPokemon = (p) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${p}/`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let temp = {
          name: data.name,
          pic: data.sprites.front_default,
          type: data.types[0].type.name,
          height: data.height,
          weight: data.weight,
        };
        if (data == null) {
          alert("the pokemon doesent exsist");
        } else setPokemon(temp);
      });
  };

  return (
    <div className="App">
      <img src={pokeb} />
      <Title />
      <div className="content">
        <SearchPoke get={getPokemon} />
        <Pokemon
          name={pokemons.name}
          pic={pokemons.pic}
          type={pokemons.type}
          height={pokemons.height}
          weight={pokemons.weight}
        />
      </div>
    </div>
  );
}

export default App;
