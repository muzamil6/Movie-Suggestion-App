import React from 'react';
import { NumberProps } from '../../type/type';

const Number: React.FC<NumberProps> = (props) => {
  return (
    <>
      <span className=" cursor-pointer rounded-[10px] py-[10px] px-[15.30px] bg-[#D9D9D9] text-[20px] leading-[23.44px] mb-2 md:mb-0">
        {props.number}
      </span>
    </>
  );
};

export default Number;
