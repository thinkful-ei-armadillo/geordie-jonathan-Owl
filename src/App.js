import React, { Component } from 'react';
/* import './App.css'; */
import List from './List';
import Stage from './Stage';


class App extends Component {
  static defaultProps = {
    participants: {
      name: [],
      avatar: [],
      inSession: {}
    }
  }

  render() {
    const {participants} = this.props;
    const stagedUsers = participants.filter(user => user.onStage)
    console.log(stagedUsers)
    return (
      <div className="App">
        <header className="App-header">
          <div className="participants-list">
            {participants.map((list, i) => (
              <List
                key={i}
                name={list.name}
                avatar={list.avatar}
              />
            ))}
          </div>
          <div className="stage-list">
            {stagedUsers.map((list, i) => (
                <Stage
                  key={i}
                  name={list.name}
                  avatar={list.avatar}
                />
              
              ))}  
          </div>
        </header>
      </div>
    );
  }
}

export default App;
