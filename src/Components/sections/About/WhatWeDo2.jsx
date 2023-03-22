import React from 'react'
import WhatWeDoCard2 from '../../Card/WhatWeDoCard2';
import Titles from '../../Titles';
import '../../styles/whatWeDo.css'

const WhatWeDO2 = () => {
  return (
    <div className="w-screen bg-slate-200 flex flex-col gap-6 justify-center items-center rounded-3xl py-12">
      <Titles 
        title="What we do"
        desc="We have several programs that helps people with different experinces getting started and strengthening their careers in tech We have several programs that helps people with different experinces getting started and strengthening their careers in tech We have several programs that helps people with different experinces getting started and strengthening their careers in tech "
      />
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-2 rounded-3xl  wwd-w">
        <WhatWeDoCard2 />
        <div className='mt-16'>
          <WhatWeDoCard2 />
        </div>
        <WhatWeDoCard2 />
        <div className='mt-16'>
          <WhatWeDoCard2 />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDO2