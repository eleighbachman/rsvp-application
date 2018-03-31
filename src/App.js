import React, { Component } from 'react';
import './css/App.css';
import EntryForm from './components/EntryForm.js';

let guests = [
  {
    "name": "Warren Xu",
    "guests": 1,
    "isConfirmed": false
  },
  {
    "name": "Jonah Bridger",
    "guests": 2,
    "isConfirmed": false,
  },
  {
    "name": "Hallie Douglas",
    "guests": 1,
    "isConfirmed": false
  },
  {
    "name": "Ellen Thomason",
    "guests": 3,
    "isConfirmed": false
  },
  {
    "name": "Silvia Westerly",
    "guests": 0,
    "isConfirmed": false
  }
]

const propertyAlert = (name, guests) => {
  alert("You've clicked on this component!");
  console.log(name)

}



const appendNewGuest = () => {
  alert("You've clicked submit to append a new guest");
}

class App extends Component {

  state = {
    guests: guests
  }

toggleConfirmationAt = (indexToChange) => {
  this.setState({
    guests: this.state.guests.map((guest, index) => {
      if (index === indexToChange) {
        return {
          ...guest,
          isConfirmed: !guest.isConfirmed,

        };
      } else {
        return guest;
      }
    })
  })

}

  render() {
    return (
      <div className="App">
        <div className="banner"/>
        <div className="appBody">

            <EntryForm guests={this.state.guests} toggleConfirmation={this.toggleConfirmationAt} propertyAlert={propertyAlert} appendNewGuest={appendNewGuest}/>

        </div>
      </div>
    );
  }
}

export default App;
