import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function AboutPage() {
  return (
    <MainLayout title={'Pricing'}>
        <h1 className={'title'}>
            <Link href="/">Pricing Page!</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.js</code>
        </p>
    </MainLayout>
  )
}
