import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import './PokemonList.css';

const PokemonCard = ({ name }) => {
  return (
    <Card 
    title={ name } 
    cover={<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" alt="Charizard" />}
        extra={<StarOutlined />}
    >
      <Meta description="fire, flying" />
    </Card>
  );
};

export default PokemonCard;