import Head from "next/head"
import { FC, PropsWithChildren } from 'react';
import { Navbar } from '../ui/Navbar';

type Props = {
    title: string
};

const origin = (typeof window === 'undefined') ? '' : window.origin;

  console.log(origin);
  

export const Layout: FC<PropsWithChildren<Props>> = ({children, title='Pokemon App'}) => {

  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="author" content="Andy Arellano"/>
            <meta name="description" content={`Informacion sobre el pokemon ${title}`}/>
            <meta name="keywords" content={`${title}, pokemon, pokedex`}/>

            <meta property="og:title" content={`Informacion sobre el pokemon ${title}`} />
            <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
            <meta property="og:image" content={`${origin}/banner.png`} />
            
        </Head>
        <Navbar/>
        <main style={{
          padding: '0px 20px'
        }}>
            {children}
        </main>
    </>
  )
}
