import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
    console.log("")
    return(
        <div className="PokemonList">
            {pokemons.map((pokemon) => {
                return <PokemonCard name={pokemon.name} key={pokemon.key}/>
            })}
        </div>
    );
};

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
};
export default PokemonList;