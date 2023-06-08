import {useState, useEffect} from 'react';
import Loading from './components/Loading';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Modal from './components/Modal';
import Footer from './components/Footer';

import CONST from './data/constants';
import emitter  from './util/eventEmitter';
import { Title } from './Interfaces/Title';
import './App.css'



function App() {
  const { URL, APISTRING } = CONST;
  const [mainMovie, setMainMovie] = useState<any>(null);
  const [movies, setMovies] = useState<any>(null);
  const [series, setSeries] = useState<any>(null);
  const [title, setTitle] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const getTitle = async ({ type, id }: Title) => {
    setLoading(true);
    const title = await fetch(`${URL}/${type}/${id}${APISTRING}`);
    const titleData = await title.json();
    setTitle(titleData);
    setLoading(false);
  }

  useEffect(() => {
    emitter.addListener(CONST.EVENTS.PosterClick, getTitle);
    emitter.addListener(CONST.EVENTS.ModalClose, () => setTitle(undefined));
    
    
    const fetchData = async () => {
      const moviesResponse = await fetch(`${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`);
      const moviesData = await moviesResponse.json();
      setMainMovie(moviesData.results[0])
      setMovies(moviesData.results);

      const seriesResponse = await fetch(`${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`);
      const seriesData = await seriesResponse.json();
      setSeries(seriesData.results);
      setLoading(false);

    };

    fetchData();
  }, []);

  return (
    <div className='m-auto antialised font-sans bg-black text-white'>
      {
        loading && (
          <>
          <Loading />
          </>
        )
      }
      {
        !loading && (
          <>
          <Hero title={mainMovie?.title} score={mainMovie?.vote_average} image={mainMovie?.backdrop_path}/>
          <Navbar />
          <Carousel title='Filmes Populares' data={movies} />
          <Carousel title='Séries Populares' data={series} />
          <Carousel title='Filmes de Ação' data={movies} />
          <Carousel title='Filmes de Romance' data={series} />
          <Carousel title='Filmes de Comédia' data={movies} />
          <Footer />
          </>
        )
      }
      {!loading && title && <Modal {...title} />}
    </div>
  )
}

export default App
