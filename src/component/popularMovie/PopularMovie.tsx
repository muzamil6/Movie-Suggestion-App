import React from 'react';
import Card from '../card/Card';

function PopularMovie() {
  return (
    <div className="flex flex-col">
      <h3 className="font-roboto text-[20px] text-black font-[500] leading-[23.44px] md:mb-[23px] mb-[11px]">
        Popular Movies
      </h3>
      <div className="flex overflow-x-scroll hide-scroll-bar">
        <div className="flex flex-nowrap">
          <Card type="movie" />
        </div>
      </div>
    </div>
  );
}

export default PopularMovie;
