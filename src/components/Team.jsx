import React from 'react';
import '../views/about.css';

function Team(props) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded overflow-hidden shadow-lg">
      <img className="w-full" src={props.image} alt={props.name} />
      <div className="px-2 py-2 sm:text-xs">
        <h1 className="font-mono text-sm text-slate-300 mt-3 mb-1 sm:mb-2">{props.title}</h1>
        <div className="font-bold text-xl mb-2 sm:text-xs">{props.name}</div>
      </div>
      <div className="px-2 pt-2 pb-4 sm:text-xs">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
      </div>
    </div>
  );
}

export default Team;



