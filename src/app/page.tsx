import Image from 'next/image'
import Header from './components/Header'
import Category from './components/Category'
import Products from './components/Products'
import Filters from './components/Filters'

export default function Home() {
  
  return (
    <main className=" sexygradient h-full flex overflow-hidden w-full">
    <Header />
    
    <Category />
    <Filters />
    <Products />
    </main>
  )
}
