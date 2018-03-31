import React, { Component } from 'react';
import './css/App.css';
import EntryForm from './components/EntryForm.js';



class App extends Component {

  state = {
    guests: [
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
    ],

    editedName: '',
    editedGuests: '0',
    editedConfirmed: false,
    isFiltered: false,
    filteredGuests: []
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

newGuestSubmitHandler = e => {
  e.preventDefault();
  if(this.state.editedName.length > 0){
    this.setState({
      guests: [
        {
          name: this.state.editedName,
          guests: this.state.editedGuests,
          isConfirmed: false
        },
        ...this.state.guests
      ],
      editedName: '',
      editedGuests: '0'
    })
  } else {
    alert("You have not entered a name.")
  }
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

toggleFilter = () => {
  this.setState({
    isFiltered: !this.state.isFiltered
  })
}

  render() {
    return (
      <div className="App">
        <div className="banner"/>
        <div className="appBody">

            <EntryForm guests={this.state.guests} toggleConfirmation={this.toggleConfirmationAt}
            removeGuest = {this.removeGuestAt}
            addGuest = {this.newGuestSubmitHandler}
            handleNameChange = {this.handleNameChange}
            handleGuestsChange = {this.handleGuestsChange}
            editedGuests = {this.state.editedGuests}
            editedName = {this.state.editedName}
            toggleFilter = {this.toggleFilter}
            isFiltered = {this.state.isFiltered}
            />

        </div>
      </div>
    );
  }
}

export default App;
