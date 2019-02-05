import React from 'react';
import './List.css';
// generate participant name, avatar, and inSession(inSession should be shown before left session)

function List(props) {
  const badge = +props.unread
  ? <div className="unread_count badge">{props.unread}</div>
  : null;
  
  return (
    <div>
      
      <img src={props.avatar} alt={(props.name + ' avatar')}></img>
      <h2 className="name">{props.name}</h2>
      <p>{props.inSession}</p>
      <p>{badge}</p>
    </div>
  )
}

export default List;
