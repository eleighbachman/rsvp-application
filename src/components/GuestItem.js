import React from 'react';

const GuestItem = (props) => (
  <li id={props.name} onClick={props.toggleConfirmation} className={props.isConfirmed? "true" : "false"}>
    <p>{props.name}</p>
    <p className="guestsPar">{props.guests} guests</p>
  </li>

);

export default GuestItem;
