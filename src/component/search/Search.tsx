import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query.length > 2) {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <input
          type="text"
          placeholder="🔍 Search a movie or a series"
          value={query}
          onChange={handleSearch}
          className="bg-[#D9D9D9] md:rounded-[30px] placeholder-[#9CA3AF] lg:w-[630px] lg:h-[57px] md:w-[410px] md:h-[54px] w-[334px] h-[52.6px] rounded-[20px] font-roboto md:text-[20px] text-[18px] font-normal md:leading-[23.44px] leading-[21.09px] mt-[-20px] text-center focus:outline-none pl-10"
        />
        {/* {query === '' && (
          <span className="absolute left-[11.75rem] top-[51%] transform -translate-y-1/2 text-gray-500 text-[20px]">
            🔍
          </span>
        )} */}
      </div>
    </form>
  );
};

export default Search;
