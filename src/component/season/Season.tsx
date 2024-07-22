import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../store/slice/CardSlice';
import { fetchSeries } from '../../store/slice/SeriesSlice';
import { RootState, AppDispatch } from '../../store/Store';
import { Link } from 'react-router-dom';
import { CardProps } from '../../type/type';


const Season: React.FC<CardProps> = ({ type, showReview }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { items, status, error } = useSelector((state: RootState) =>
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
    <div className='mt-5 '>
      <div className="">
        <div className="flex flex-wrap justify-start mt-[34.73px] gap-[20px] ">
          {items?.slice(8, 12).map((item) => (
            <div key={item.id} className='flex flex-col w-full sm:w-[calc(100%-20px)] md:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] h-[202px] rounded-[20px]'>
              <Link to={`/${type === 'movie' ? 'movie' : 'series'}/${item.id}`} className="flex-none transition-transform duration-200 relative rounded-lg overflow-hidden cursor-pointer" >
                <img className=" object-cover h-[142px] w-full rounded-t-[20px]"
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={type === 'movie' ? item.title : item.name} />
                <div className="font-roboto font-bold text-base leading-[23.44px] flex items-center bg-[#ffffff] px-[17px] py-2 pb-5">
                  <h3 className="line-clamp-2">{type === 'movie' ? item.title : item.name}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Season;
