import React from 'react';

export default class Main extends React.Component {
  render() {
    if (!this.props.listing) {
      return (
        <h3 className="zeroStateMessage">
          Please select a listing on the left.
        </h3>
      );
    }
    return (
      <main>
        <h2>{this.props.listing.title}</h2>

        <div className="auctionInfo">
          <img src={this.props.listing.img} alt="" />

          <div className="auctionBidBox">
            <div className="auctionBidBox-currentBid">{this.props.listing.startingBid}</div>
            <input type="number" id="bidAmount" />
            <button type="button">Bid</button>

            <div className="auctionBidBox-status">
              You are currently winning this auction!
            </div>
          </div>
        </div>

        <div>
          <p>{this.props.listing.description}</p>
        </div>
      </main>
    );
  }
}
