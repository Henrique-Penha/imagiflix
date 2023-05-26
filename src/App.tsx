import {useState, useEffect} from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import movies from './mock/movies.mock';
import CONST from './data/constants';
import './App.css'


function App() {
  const { URL, APISTRING } = CONST;
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`);
      const data = await response.json();
      setMovie(data.results[0])
    };

    fetchData();
  }, []);

  return (
    <div className='m-auto antialised font-sans bg-black text-white'>
      <Hero title={movie?.title} score={movie?.vote_average} image={movie?.backdrop_path}/>
      <Navbar />
      <Carousel title='Filmes' data={movies} />
      <Carousel title='Filmes' data={movies} />
    </div>
  )
}

export default App
