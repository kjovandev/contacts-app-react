import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from "./cards"

function App() {
  return (
    <div className="App">
      <header className="header">
        Contacts
      </header>

      <Card
          name="Person 1"
          email="person@random.com"
          phoneNumber="+1 88 785554523"
          imgSource="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
        />
        <Card
          name="Person 2"
          email="another@person.com"
          phoneNumber="+1 88 123456789"
          imgSource="https://miro.medium.com/v2/resize:fit:1400/1*y_uyQN1xEjppGVWJJkibMQ.jpeg"
        />
        <Card
          name="Person 3"
          email="yetanother@person.com"
          phoneNumber="+1 88 987654321"
          imgSource="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
        />
      </div>
    
  );
}

export default App;
