import React, { useEffect, useState } from 'react'
import { getPokemonUrl } from '../api/getPokemons'
import '../App.css'

export const PokemonCard = ({ pokemon }) => {
    const [pokemonData, setPokemonData] = useState(null)

    useEffect(() => {
        getPokemonUrl(pokemon.url)
            .then((data) => setPokemonData(data))
            .catch((error) => console.log(error))}, [pokemon.url])

    if (!pokemonData) return <div>LOADING</div>

    return (
        <div className='pokemonCard'>
            <div className='pokemonName'>{pokemon.name}</div>
            <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemon.name}/>
        </div>
    )
}