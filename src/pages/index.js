import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import LandingPage from '@/components/LandingPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <LandingPage/>
      {/* <p className="text-green-400 text-2xl font-bold uppercase font-fola">Next.js</p>
      <div className='p-10 m-5 border-red-500 bg-secondary-100 border-8 w-3/4'></div>
      <div className='container text-6xl'>
        <p className='lg:text-green-600 md:text-red-600 sm:text-blue-600 font-bold text-1xl uppercase'>Text1</p>
        <p className='text-red-600 font-light text-5xl'>Text2</p>
      </div>
      <div className='p-2 m-3 bg-blue-700 grid sm:grid-cols-3 gap-10'>
          <div className='cards bg-red-500 col-span-1'/>
          <div className='cards bg-green-500 col-span-2'/>          
      </div> */}
    </>
  )
}
