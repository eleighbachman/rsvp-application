import React from 'react';

const GuestCounter = (props) => (
  <span>
    <table className="counterTable">
    <tbody>
      <tr>
        <td>Total Guests: {props.guests.length}</td>
        <td>Confirmed: {props.totalConfirmed}</td>
        <td>Unconfirmed: {props.totalUnconfirmed}</td>
      </tr>
    </tbody>
    </table>
  </span>
)

export default GuestCounter;
