import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Header = () => {
    const {userData} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center justify-center text-center mb-20 px-4 text-gray-800'>
        <img src={assets.header_image} alt="" className='w-36 h-36 rounded-full mb-6' />
    <h1 className='flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2'>
            Hello {userData ? userData.username : 'Guest'}! 
        <img src={assets.logo_icon} className='w-8 aspect-square' alt="" />
        </h1>
        <h2 className='text-2xl sm:text-4xl font-bold mb-4'>
        Welcome to Our App
        </h2>
    <p className='mb-8 max-w-md'>Your app and data is safe and your privacy is our primary concern</p>
    <button className='bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/50'>
      Get Started
    </button>
    </div>
  )
}

export default Header