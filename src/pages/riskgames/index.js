import { Inter } from "next/font/google"
import RiskGames from '@/components/RiskGames'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
      <RiskGames/>      
    </>
  )
}
