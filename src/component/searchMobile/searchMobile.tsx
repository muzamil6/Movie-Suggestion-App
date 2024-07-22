import React, { useState } from 'react';
import Search from '../search/Search';
import SearchIcon from '../../../src/assets/images/searchIcons.svg';
import PlusIcon from '../../../src/assets/images/plusIcons.svg';



function SearchMobile() {
    const [showSearch, setShowSearch] = useState(false);

    const searchHandler = () => {
        setShowSearch(!showSearch);
        console.log("Clicked, showSearch is now: ", !showSearch);
    };
    return (
        <div className='inline-block'>
              <div className="flex justify-end w-full lg:hidden space-x-5 md:ml-[-60px]">
                {!showSearch && (
                    <button
                        onClick={searchHandler}
                        className="bg-[#D9D9D9] w-[39px] h-[37px] rounded-full flex items-center justify-center mt-2"
                    >
                        <img src={SearchIcon} alt="Search" width={20} height={20} />
                    </button>
                )}
                <button>
                    <img src={PlusIcon} alt="Add" />
                </button>
            </div>
            {showSearch && (
                <div className="block lg:hidden ">
                    <div className={`flex justify-center mt-[60px] `}>

                        <Search />

                    </div>
                </div>
            )}
        </div>
    )
}

export default SearchMobile