import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import noPoster from '../../images/no-photo.jpg';
import css from '../../index.css';


const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    async function fetchData() {
      const API_KEY = '46b140c521482b90437070e922d7e563';
      const BASE_URL = 'https://api.themoviedb.org/3';

      try {
        const resp = await axios.get(
          `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
          { signal: abortController.signal }
        );

        if (!resp.data.cast) {
          toast.error(
            'Sorry, a request error. Please try again later.',
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
        setCast(resp.data.cast);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <>
      {isLoading && (
        <div className={css.vortexWrapper}>
          <Loader />
        </div>
      )}

      <ul>
        {cast.map(({ profile_path, character, original_name, id }) => (
          <li key={id + character}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : noPoster}
              alt={original_name}
              width={150}
            />
            <b>{original_name}</b>
            <p>character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};


export default Cast;