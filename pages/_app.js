import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
  <div>
    <nav></nav>
  <Component {...pageProps} />
  <footer>
    
  </footer>
  </div>
  )
}

export default MyApp
