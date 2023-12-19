import React from 'react'
import '../views/about.css';
import person1 from "../assets/person1.png";

function Team() {
  return (
    <div className="w-1/5 rounded overflow-hidden shadow-lg">
            <img className="w-full" src={person1} alt="Sunset in the mountains" />
            <div className="px-2 py-2">
              <h1 className='font-mono text-sm text-slate-300 mt-3 mb-7'>Frontend Developer</h1>
              <div className="font-bold text-xl mb-2">Mary Rose</div>
            </div>
            <div className="px-2 pt-5 pb-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
    </div>
  )
}

export default Team;
