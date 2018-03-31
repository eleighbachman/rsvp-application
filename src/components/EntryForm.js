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
          Name: <input id="nameInput" type="text" />
        </span><br/>
        <span>
          Guests: <input type="number" min="0" max="5"/>
        </span><br/>
        <button id="saveChanges">Save</button>
      </div>
    </div>
    <InvitedGuests guests={props.guests}

    toggleConfirmation={props.toggleConfirmation} />
  </div>
);

export default EntryForm;
