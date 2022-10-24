import Link from 'next/link'

import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function AboutPage() {
  return (
    <>
      <h1 className={'title'}>
          <Link href="/">About page!</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.js</code>
      </p>
    </>
  )
}

AboutPage.getLayout = function getLayout( page ){
  return(
    <MainLayout title={'About'}>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
