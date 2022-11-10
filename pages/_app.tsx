import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { Toaster } from 'react-hot-toast'
import { Navbar } from '../src/components/Common/Navbar'


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const routeName = router.pathname
    .split('/')
    .pop()!
    .split('-')
    .join(' ')
    .toString()

  const title = routeName.charAt(0).toUpperCase() + routeName.slice(1)

  return (
    <div className="grid grid-cols-6 bg-tertiary">
      <NextNProgress />
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster toastOptions={{ duration: 3000 }} />

      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
