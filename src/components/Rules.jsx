import React from 'react';

function Rules(props) {
  return (
    <>
      <div className="my-4 md:my-6 lg:my-8"></div>
      <div className="card md:space-y-10">
        <div className="grid grid-cols-12 items-center">
          <div className='col-span-12 md:col-span-2 text-center'>
            <h1 className="title text-xl md:text-2xl lg:text-3xl">{props.number}</h1>
          </div>
          <div className='col-span-12 md:col-span-10'>
            <p className="text-sm md:text-base lg:text-lg">{props.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rules;


