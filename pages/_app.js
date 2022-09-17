import Footer from '../components/Footer'
import '../styles/globals.css'
import Header from '../components/Header.jsx'
function MyApp({ Component, pageProps }) {

  return (
  <div className='gradient-bg-welcome text-white'>
   <Header />
  <Component {...pageProps} />
 <Footer/>
  </div>
  )
}

export default MyApp
