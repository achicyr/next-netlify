import Link from 'next/link'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Link href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9ig-veuRaLI4QB0Ws8xMzjv"><a>lien vers l aplaylist</a></Link>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
