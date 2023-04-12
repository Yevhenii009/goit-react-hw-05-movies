import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import axios from 'axios';
import css from './Home.module.css';

const Home = () => {
  const [trandFilms, setTrandFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    async function fetchData() {
      const API_KEY = '46b140c521482b90437070e922d7e563';
      const BASE_URL = 'https://api.themoviedb.org/3';

      try {
        const resp = await axios.get(
          `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
          { signal: abortController.signal }
        );

        if (!resp.data.results) {
          toast.error(
            'Sorry, a request error occurred. Please try again later.',
            {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
            }
          );
          setIsLoading(false);
          return;
        }
        setTrandFilms(resp.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <main>
      <h1>Trending today</h1>

      {isLoading && <Loader />}

      <ul>
        {trandFilms.map(({ id, original_title }) => (
          <li className={css.listItem} key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};


export default Home;