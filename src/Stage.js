import React from 'react';

function Stage(props) {
  const badge = +props.unread
  ? <div className="unread_count badge">{props.unread}</div>
  : null;
  return (
    <div className={props.onStage}>
      <h2>{props.name}</h2>
      <div className="stage-avatar">
        <img alt={(props.name + ' avatar')}  src={props.avatar}></img>
      </div>
      <p>{badge}</p>
    </div>
  )
};

export default Stage;
