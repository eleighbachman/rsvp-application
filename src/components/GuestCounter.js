import React from 'react';

const GuestCounter = (props) => (
  <span>
    <table className="counterTable">
    <tbody>
      <tr>
        <td>Total Guests: {props.guests.length}</td>
        <td>Confirmed: 3</td>
        <td>Unconfirmed: 1</td>
      </tr>
    </tbody>
    </table>
  </span>
)

export default GuestCounter;
