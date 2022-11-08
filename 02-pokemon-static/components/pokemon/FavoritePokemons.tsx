import { Grid } from "@nextui-org/react"
import { FavoritePokemonsCard } from './FavoritePokemonsCard';

interface props{
    favoritePokemons: number[]
}

export const FavoritePokemons = ({favoritePokemons}: props) => {
  return (
    <Grid>
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {
        favoritePokemons.map( id => (
          <FavoritePokemonsCard id={id}/>
        ) )
      }
    </Grid.Container>
  </Grid>
  )
}
