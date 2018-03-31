import React from 'react';
import GuestItem from './GuestItem.js';

const InvitedGuests = (props) => (
  <div className="guestListing">
    <h2>Invited Guests</h2>
    <span className="filterConfirmed">
      Show confirmed guests only
      <input type="checkbox"/>
    </span>
    <ul>

      {props.guests.map((guest, index) => {
        return <GuestItem name={guest.name}
        key={index} guests={guest.guests}
        isConfirmed={guest.isConfirmed}
        propertyAlert={props.propertyAlert}
        toggleConfirmation={() => props.toggleConfirmation(index)}
        />
      })}

    </ul>
  </div>
);

export default InvitedGuests;
