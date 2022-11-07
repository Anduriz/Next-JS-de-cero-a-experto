import Head from "next/head"
import { FC, PropsWithChildren } from 'react';
import { Navbar } from '../ui/Navbar';

type Props = {
    title: string
};

export const Layout: FC<PropsWithChildren<Props>> = ({children, title='Pokemon App'}) => {

  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="author" content="Andy Arellano"/>
            <meta name="description" content={`Informacion sobre el pokemon ${title}`}/>
            <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
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
