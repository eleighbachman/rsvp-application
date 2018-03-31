import React from 'react';
import GuestItem from './GuestItem.js';
import GuestCounter from './GuestCounter.js';

const InvitedGuests = (props) => (
  <div className="guestListing">
    <h2>Invited Guests</h2>
    <span className="filterConfirmed">
      Show confirmed guests only

      <input type="checkbox"/>

    </span>
    <GuestCounter guests={props.guests} confirmed={props.confirmed}/>

    <ul>

      {props.guests.map((guest, index) => {
        return <GuestItem name={guest.name} isConfirmed={guest.isConfirmed}
        key={index} guests={guest.guests}
        toggleConfirmation={() => props.toggleConfirmation(index)}
        />
      })}

    </ul>
  </div>
);

export default InvitedGuests;
