import React from 'react'
import WhatWeDoCard from '../../Card/WhatWeDoCard';
import Titles from '../../Titles';

const WhatWeDo = () => {
  return (
    <div className="w-screen flex flex-col gap-4 justify-center items-center py-12">
      <Titles
        title="What we do "
        desc="We have several programs that helps people with different experiences getting started and strengthening their careers in tech as talents and entrepreneurs"
      />
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 p-2 gap-12 xl:mx-32 lg:mx-12 md:mx-10 sm:mx-10 mx-6 mt-12">
        <WhatWeDoCard/>
        <WhatWeDoCard/>
        <WhatWeDoCard/>
      </div>
    </div>
  );
}

export default WhatWeDo