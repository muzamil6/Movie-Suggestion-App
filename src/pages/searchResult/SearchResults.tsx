import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { MovieSearch } from '../../type/type';

const SearchResults: React.FC = () => {
    const [results, setResults] = useState<MovieSearch[]>([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        const fetchResults = async () => {
            if (query) {
                const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${query}`);
                setResults(response.data.results);
            }
        };

        fetchResults();
    }, [location.search, query]);

    return (
        <div>
            <div className="lg:mx-[80px] lg:mb-[46px] lg:mt-[46px] my-[27px] mx-[20px] relative">
                <div className="lg:mb-[14px]">
                    <h1 className={`font-roboto text-[15px] font-[500] leading-[10.95px] text-black hidden lg:block`}  >
                        Showing search results for: {query}
                        <span className={`font-roboto text-[20px] font-[500] leading-[14.6px] text-gray-500`}  >   </span>
                    </h1>
                </div>
                <div className="lg:pt-[20px] relative">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-[31px] sm:gap-y-[20px] gap-x-[20px] sm:gap-x-[20px] relative">
                        {results.map((movie) =>
                            movie?.poster_path !== null ? (
                                <Link key={movie?.id} to={`/movie/${movie?.id}`}>
                                    <div className="relative">
                                        <img
                                            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                                            alt={movie?.title}
                                            className="rounded-[20px] object-cover w-full h-full"
                                        />
                                        <div className={`absolute top-[17px] left-[12px] text-white font-caros-bold text-[15px] font-semibold leading-[9.24px] text-left`} >
                                            <i className="fa-solid fa-star text-yellow-500 "></i>   {movie?.vote_average?.toFixed(1)}
                                        </div>
                                    </div>
                                </Link>
                            ) : null
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
