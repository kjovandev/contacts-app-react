import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from "./cards"
import Contacts from "./components"


// failed to implement the map function
//Found the bug
// in order for the map function to work, the variable names from the
// createCard function need to be used in the Card func. in the cards.jsx file
function createCard(contact){
  return (
    <Card 
    key={contact.id}
    name={contact.name}
    img={contact.imgUrl}
    tel={contact.phoneNumber}  
    email={contact.email}
  />
  );
}

function App() {
  return (
    <div className="App">
      <header className="header">
        Contacts
      </header>

      {/* failed to implement the math function  will get back to it later */}
      {Contacts.map(createCard)}




      
    </div>
  );
}

export default App;
// <Card
      //   name={Contacts[0].name}
      //   email={Contacts[0].email}
      //   phoneNumber={Contacts[0].phoneNumber}
      //   imgSource={Contacts[0].imgUrl}
      // />
      // <Card
      //   name={Contacts[1].name}
      //   email={Contacts[1].email}
      //   phoneNumber={Contacts[1].phoneNumber}
      //   imgSource={Contacts[1].imgUrl}
      // />
      // <Card
      //   name={Contacts[2].name}
      //   email={Contacts[2].email}
      //   phoneNumber={Contacts[2].phoneNumber}
      //   imgSource={Contacts[2].imgUrl}
      // />