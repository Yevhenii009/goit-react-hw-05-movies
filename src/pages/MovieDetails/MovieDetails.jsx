import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import axios from 'axios';
import css from './MovieDetails.module.css';
import noPoster from '../../images/no-photo.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [currentMovie, setCurrentMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    async function fetchData() {
      const API_KEY = '46b140c521482b90437070e922d7e563';
      const BASE_URL = 'https://api.themoviedb.org/3';

      try {
        const resp = await axios.get(
          `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`,
          { signal: abortController.signal }
        );

        if (!resp.data) {
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
        setCurrentMovie(resp.data);
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

  const {
    poster_path,
    title,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = currentMovie;

  const genGenres = genres => {
    try {
      return genres.map(genre => genre.name).join(', ');
    } catch (error) {}
  };

  const imgUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : noPoster;

  return (
    <main>
      <Link className={css.btnBack} type="button" to={backLinkHref}>
         Go Back
      </Link>

      {isLoading && <Loader />}

      <div className={css.movieDetails}>
        <img
          className={css.movieDetailsImage}
          src={imgUrl}
          alt={title}
          width={250}
        />

        <div>
          <h2>
            {original_title} ({new Date(release_date).getFullYear() || "no data"})
          </h2>
          <p>User Score: {Math.floor(vote_average * 10)}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <b>Genres</b>

          <p>{genGenres(genres)}</p>
        </div>
      </div>

      <h2>Additional information</h2>
      <ul className={css.addInformation}>
        <li>
          <Link to="cast" state={location.state}>
            <p>
              <b>Cast</b>
            </p>
          </Link>
        </li>
        <li>
          <Link to="reviews" state={location.state}>
            <p>
              <b>Reviews</b>
            </p>
          </Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;