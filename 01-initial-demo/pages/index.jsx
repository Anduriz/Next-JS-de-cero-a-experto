import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayout title={'Home'}>
        <h1 className={'title'}>
          {/* <a href="/about">Andy Arellano</a> */}
          <Link href="/about">Andy Arellano</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.js</code>
        </p>
    </MainLayout>
  )
}



