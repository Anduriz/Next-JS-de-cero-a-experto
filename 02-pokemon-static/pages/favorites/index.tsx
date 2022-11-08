import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui'
import { localStorageFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localStorageFavorites.pokemons());
  }, [])
  
  return (
    <Layout title='Favorites'>
        {
          favoritePokemons.length === 0
          ? (<NoFavorites/>)
          : (<FavoritePokemons favoritePokemons={favoritePokemons}/>)
        }
    </Layout>
  )
}

export default FavoritesPage