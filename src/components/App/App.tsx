import React from 'react';
import './App.css';
import VMBody from '../VMBody/VMBody';
import UserVM from '../UserVM/UserVM';

const App: React.FC = () => {
  return (
    <div className="App">
      <VMBody />
      <UserVM />
    </div>
  );
};

export default App;
