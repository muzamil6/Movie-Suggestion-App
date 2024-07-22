import React, { CSSProperties, useState, useEffect } from 'react';
import PopularMovie from '../../component/popularMovie/PopularMovie';
import Trending from '../../component/trending/Trending';
import PopularReleases from '../../component/popularRelease/PopularReleases';
import HashLoader from "react-spinners/HashLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    const fetchData = async () => {

      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };
    
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
        <HashLoader cssOverride={override} size={150} color={"#000"} loading={loading} />
      </div>
    );
  }

  return (
    <div className="container ">
      <div className="md:mx-[80px]  mx-5  md:mb-[85px] mb-[38px] md:mt-[41px] mt-[37px] ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-[70px] md:gap-[35px] ">
          <div className="md:col-span-1 lg:col-span-1 ml-0 row-start-1">
            <PopularMovie />
          </div>
          <div className="md:col-span-2 md:ml-[90px] md:mt-0 mt-[48px] lg:mr-[-80px]  row-start-3 md:row-start-1">
            <Trending />
          </div>
          <div className="md:col-span-3 md:mt-0 mt-[48px] row-start-2 lg:mr-[-80px] md:row-start-3 lg:row-start-2">
            <PopularReleases />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
