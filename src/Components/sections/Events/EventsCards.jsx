import React from 'react'
import { FaFilter } from 'react-icons/fa';
import Titles from '../../Titles'
import '../../styles/events.css'
import EventsCard from '../../Card/EventsCard';

const EventsCards = () => {
  return (
    <div className="flex flex-col w-screen justify-center items-center bg-slate-300">
      <div className="flex justify-between items-center e-w">
        <Titles 
          title="Recent events"
          desc="We have several programs that helps people with different experiences getting started and strengthening their careers in tech as talents and entrepreneurs"
        />
        <button className="border border-slate-800 rounded-2xl px-4 py-3 flex-row justify-center items-center gap-4 hidden xl:flex lg:flex md:flex sm:hidden ">
          <p>Category</p>
          <FaFilter />
        </button>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-2 gap-12 xl:mx-32 lg:mx-12 md:mx-10 sm:mx-10 mx-6 e-w mt-8">
        <EventsCard />
        <EventsCard />
        <EventsCard />
      </div>
      <div className="flex justify-between items-center e-w">
        <Titles 
          title="Upcoming events"
          desc="We have several programs that helps people with different experiences getting started and strengthening their careers in tech as talents and entrepreneurs"
        />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-2 gap-12 xl:mx-32 lg:mx-12 md:mx-10 sm:mx-10 mx-6 e-w mt-8">
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
      </div>
      <br /><br />
    </div>
  );
}

export default EventsCards