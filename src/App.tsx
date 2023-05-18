import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import './App.css'
import movies from './mock/movies.mock';

function App() {

  return (
    <div className='m-auto antialised font-sans bg-black text-white'>
      <Hero />
      <Navbar />
      <Carousel title='Filmes' data={movies} />
      <Carousel title='Filmes' data={movies} />
    </div>
  )
}

export default App
