import '../styles/globals.css'
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return <div className='container'>
    <nav>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/users'>Users</Link></li>
        <li><Link href='/todos'>Todos</Link></li>
        <li><Link href='/albums'>Albums</Link></li>
      </ul>
    </nav>
    <Component  {...pageProps} />
  </div>
}

export default MyApp
