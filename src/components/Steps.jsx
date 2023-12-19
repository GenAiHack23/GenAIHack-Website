import React from 'react'

function Steps(props) {
  return (
    <div>
      <div className="card">
          <h1 className="title">{props.number}</h1>
          <div style={{ height: 15 }}></div>
          <p>{props.content}</p>
        </div>
    </div>
  )
}

export default Steps;
