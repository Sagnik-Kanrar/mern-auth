import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { assets } from '../assets/assets'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-6 sm:px-24' style={{ backgroundImage: `url(${assets.backgroundImage})` }}>
      <Navbar />
      <Header />
    </div>
  )
}

export default Home