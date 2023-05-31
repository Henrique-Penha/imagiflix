import {useState, useEffect} from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import CONST from './data/constants';
import './App.css'


function App() {
  const { URL, APISTRING } = CONST;
  const [mainMovie, setMainMovie] = useState<any>(null);
  const [movies, setMovies] = useState<any>(null);
  const [series, setSeries] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const moviesResponse = await fetch(`${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`);
      const moviesData = await moviesResponse.json();
      setMainMovie(moviesData.results[0])
      setMovies(moviesData.results);
      console.log(mainMovie)

      const seriesResponse = await fetch(`${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`);
      const seriesData = await seriesResponse.json();
      setSeries(seriesData.results)

    };

    fetchData();
  }, []);

  return (
    <div className='m-auto antialised font-sans bg-black text-white'>
      <Hero title={mainMovie?.title} score={mainMovie?.vote_average} image={mainMovie?.backdrop_path}/>
      <Navbar />
      <Carousel title='Filmes Populares' data={movies} />
      <Carousel title='Séries Populares' data={series} />
      <Footer />
    </div>
  )
}

export default App
