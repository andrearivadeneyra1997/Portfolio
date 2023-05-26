import { Inter } from 'next/font/google'
import Works from './componentes/Works'
import Footer from './componentes/Footer'
import Header from './componentes/Header'
import Hero from './componentes/Hero'
import Skills from './componentes/Skills'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`min-h-screen flex flex-col justify-between ${inter.className}`}>
      <Header/>
      <main className="flex justify-center">
        <div className='w-full max-w-7xl px-4'>
          <Hero/>
          <Skills/>
          <Works/>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
