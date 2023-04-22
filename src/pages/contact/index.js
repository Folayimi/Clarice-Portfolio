import { Inter } from '@next/font/google'
import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
      <Contact/>      
    </>
  )
}
