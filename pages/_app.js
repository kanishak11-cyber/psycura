import Footer from '../components/Footer'
import '../styles/globals.css'
import Header from '../components/Header.jsx'
import Sidebar from '../components/Sidebar'
import Sentamental from '../components/Sentamental'
function MyApp({ Component, pageProps }) {

  return (
  <div className='gradient-bg-welcome text-white'>
   <Header />
   <div className='flex flex-row'>
    <Sidebar/>
    <Component {...pageProps} />
    <Sentamental/>
   </div>
 
 <Footer/>
  </div>
  )
}

export default MyApp
