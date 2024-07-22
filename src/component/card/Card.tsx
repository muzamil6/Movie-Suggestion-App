import React, { useEffect,useState, CSSProperties } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks'
import { fetchMovies } from '../../store/slice/CardSlice';
import { fetchSeries } from '../../store/slice/SeriesSlice';
// import { RootState, AppDispatch } from '../../store/Store';
import { Link } from 'react-router-dom';
import { CardProps } from '../../type/type';




const Card: React.FC<CardProps> = ({ type, showReview }) => {

  const dispatch = useAppDispatch();

  const { items, status, error } = useAppSelector((state) =>
    type === 'movie' ? state.movie : state.series
  ); 

  useEffect(() => {
    if (type === 'movie') {
      dispatch(fetchMovies());
    } else {
      dispatch(fetchSeries());
    }
  }, [dispatch, type]);

  return (
    <div>
      {status === 'loading' && <p> 
    
      </p>}
      {status === 'failed' && <p className='fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50'>Error: {error}</p>}
      {status === 'succeeded' && (
        <div className="overflow-x-scroll hide-scroll-bar">
          <div className="flex space-x-4 hide-scroll-bar">
            {items.map((item) => (
              <Link
                to={`/movie/${item.id}`}
                key={item.id}
                className="flex-none transition-transform duration-200 relative rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  className="h rounded-[20px] object-cover w-[158px] h-[234px] md:w-[177px] md:h-[263px]"
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt=""
                />
                {showReview && (
                  <div className="absolute top-0 bg-opacity-75 w-full text-white text-left p-2">
                    <p>
                      <i className="fas fa-star text-yellow-400 mr-1" />
                      {item.vote_average.toFixed(1)}
                    </p>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
