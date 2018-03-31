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





const appendNewGuest = () => {
  alert("You've clicked submit to append a new guest");
}

class App extends Component {

  state = {
    guests: guests,
    editedName: 'Lady Godiva',
    editedGuests: '2',
    editedConfirmed: false,
    filterGuests: false,
    filteredGuests: []
  }

filterGuests = () => {
  console.log("Guests will be filtered with this functionality")
  this.setState({
    filterGuests: !this.state.filterGuests,
    filteredGuests: this.state.guests.map((guest)=> {
      if(guest.isConfirmed===true) {
        return guest
      }
    })
  })
}

removeGuestAt = (indexToRemove) => {
  this.setState({
    guests: this.state.guests.map((guest, index) => {
      if (index === indexToRemove) {
        this.state.guests.splice(index, 1)
      } else {
        return guest;
      }
    })
  })
}

handleNameChange = (event) => {
  this.setState({editedName: event.target.value})
}

handleGuestsChange = (event) => {
  this.setState({editedGuests: event.target.value})
}

addGuest = () => {
  let newGuest = {
      "name": this.state.editedName,
      "guests": this.state.editedGuests,
      "isConfirmed": this.state.editedConfirmed
    };

  console.log(newGuest)
  this.setState({
    guests: guests.push(newGuest)
  })
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

            <EntryForm guests={this.state.guests} toggleConfirmation={this.toggleConfirmationAt}
            removeGuest = {this.removeGuestAt}
            addGuest = {this.addGuest}
            handleNameChange = {this.handleNameChange}
            handleGuestsChange = {this.handleGuestsChange}
            editedGuests = {this.state.editedGuests}
            editedName = {this.state.editedName}
            filterGuests = {this.filterGuests} appendNewGuest={appendNewGuest}/>

        </div>
      </div>
    );
  }
}

export default App;
