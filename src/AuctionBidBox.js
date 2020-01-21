import React from 'react';

export default class AuctionBidBox extends React.Component {
  render() {
    return (
      <div className="auctionBidBox">
        <div className="auctionBidBox-currentBid">$14.95</div>
        <input type="number" id="bidAmount" />
        <button type="button">Bid</button>

        <div className="auctionBidBox-status">
          You are currently winning this auction!
        </div>
      </div>
    );
  }
}
