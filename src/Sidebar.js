import React from 'react';
import AuctionMiniDisplay from './AuctionMiniDisplay';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <h3>Live Auctions:</h3>

        {this.props.listings.map(listing => (
          <AuctionMiniDisplay listing={listing} itemChangedHandler={this.props.itemChangedHandler} />
        ))}
      </div>
    );
  }
}
