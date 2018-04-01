import React from 'react';
import InvitedGuests from './InvitedGuests.js';

const EntryForm = (props) => (
  <div className="trackerFields">
    <div className="entryForm">
      <h1>RSVP</h1>
      <h2>Guest Tracker</h2>
      <br/>
      <div className="entryFields">
        <span>
          Name: <input id="nameInput" type="text" value={props.editedName} onChange={props.handleNameChange} />
        </span><br/>
        <span>
          Guests: <input id="guestsInput" type="number" value={props.editedGuests} onChange={props.handleGuestsChange} min="0" max="5"/>
        </span><br/>
        <button id="saveChanges" onClick={props.addGuest}>Save</button>
      </div>
    </div>
    <InvitedGuests guests={props.guests}
    toggleFilter = {props.toggleFilter}
    isFiltered = {props.isFiltered}
    removeGuest = {props.removeGuest}
    totalConfirmed = {props.totalConfirmed}
    totalUnconfirmed = {props.totalUnconfirmed}
    toggleConfirmation={props.toggleConfirmation} />
  </div>
);

export default EntryForm;
