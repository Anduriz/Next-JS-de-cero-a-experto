import NextLink from 'next/link'
import { Link, Spacer, Text, useTheme, Image } from "@nextui-org/react"

export const Navbar = () => {

    const { theme } = useTheme();

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0x 20px',
            backgroundColor: theme?.colors.gray300.value
        }}>

        <NextLink href="/" passHref legacyBehavior>
            <Link>
                <Image 
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/101.png"
                    alt="Icono de la App"
                    width={70}
                    height={70}
                />
                <Text color="red" h2>P</Text>
                <Text color="white" h3>okémon</Text>
            </Link>
        </NextLink>

        <Spacer css={{flex: 1}}/>

        <NextLink href="/favorites" passHref legacyBehavior>
            <Link css={{marginRight: '15px'}}>
                <Text color="white" h4>Favorites</Text>
            </Link>
        </NextLink>

        </div>
    )
}
