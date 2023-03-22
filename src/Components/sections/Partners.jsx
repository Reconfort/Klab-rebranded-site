import React from 'react'
import PatnerCard from '../Card/PatnerCard'
import Titles from '../Titles'

const Partners = () => {
  return (
    <div className="w-screen bg-slate-200 flex flex-col gap-6 justify-center items-center rounded-3xl py-12">
      <Titles 
        title="OUR PARTNERS"
        desc="Obviously we can not run all of these programs alone so we have joined hands with different partners to make that possible and help people the best out of our programs"
      />
      <div className="grid grid-cols-3 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-2 p-2 rounded-3xl">
        <PatnerCard />
        <PatnerCard />
        <PatnerCard />
        <PatnerCard />
        <PatnerCard />
        <PatnerCard />
        <PatnerCard />
        <PatnerCard />
        <PatnerCard />
        <PatnerCard />
        <PatnerCard />
      </div>
    </div>
  );
}

export default Partners