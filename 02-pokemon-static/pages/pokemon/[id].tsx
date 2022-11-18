import { useRouter } from 'next/router'
import { Layout } from '../../components/layouts'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { pokeApi } from '../../api';
import { Pokemon } from '../../interfaces/pokemon-full';
import { Grid, Card, Text, Button, Container, Image } from '@nextui-org/react';
import { getPokemonInfo, localStorageFavorites } from '../../utils';
import { useState } from 'react';
import conffeti from 'canvas-confetti';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage:NextPage<Props> = ({pokemon}) => {

  console.log(pokemon);

  const [includesInFavorites, setIncludesInFavorites] = useState( localStorageFavorites.includesInFavorites(pokemon.id) );

  const onToggleFavorite = () => {
    localStorageFavorites.toggleFavorite(pokemon.id);
    setIncludesInFavorites(!includesInFavorites);

    if(includesInFavorites) return;

    conffeti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x:1,
        y:0,
      }
    })

  }

  // Test route
  const router = useRouter();
  console.log(router.query);
  
  return (
    <Layout title={pokemon.name}>
        <Grid.Container css={{ marginTop: '5px' }} gap={2}>
          <Grid xs={12} sm={4}>
            <Card isHoverable css={{padding:'30px'}}>
              <Card.Body>
                <Card.Image src={pokemon.sprites.other?.dream_world.front_default || '/no-image-png'} alt={pokemon.name} width="100%" height={200}>

                </Card.Image>
              </Card.Body>
            </Card>
          </Grid>

          <Grid xs={12} sm={8}>
            <Card>
              <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
                <Text h1 transform='capitalize'>{pokemon.name}</Text>
                <Button
                color="gradient"
                ghost={ includesInFavorites }
                onPress={ onToggleFavorite }
                >
                  { includesInFavorites ? 'En favoritos' : 'Guardar en favoritos' }
                </Button>
              </Card.Header>
              <Card.Body>
                <Text size={30}>Sprites:</Text>
                <Container direction='row' display='flex'>
                  <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100}></Image>
                  <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100}></Image>
                  <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100}></Image>
                  <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100}></Image>
                </Container>
              </Card.Body>
            </Card>
          </Grid>
          
        </Grid.Container>
    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`);
  console.log({pokemon151});
  
  return {
    paths: pokemon151.map( id => ({ params: {id} })),
    // fallback: false
    fallback: 'blocking'
  }
}

// Obtener propiedades generadas del lado del servidor enel buildtime
export const getStaticProps: GetStaticProps = async ({params}) => {

  const {id} = params as {id: string};

  const pokemon = await getPokemonInfo(id);

  if( !pokemon ){
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      pokemon
    },
    revalidate: 86400,
  }
}

export default PokemonPage