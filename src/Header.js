import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>zBay</h1>

        <div id="links">
          <ul>
            <li>My Account</li>
            <li>Help</li>
          </ul>
        </div>
      </header>
    );
  }
}
