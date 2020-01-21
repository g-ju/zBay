import React from 'react';

export default class AuctionMiniDisplay extends React.Component {
  render() {
    const { listing } = this.props;
    return (
      <button
        type="button"
        className="auctionMiniDisplay"
        onClick={() => (
          this.props.itemChangedHandler(listing.id)
        )}
      >
        <img src={listing.img} alt="" />
        <h4 className="auctionMiniDisplay-title">{listing.title}</h4>
        <div className="auctionMiniDisplay-details">
          <span className="auctionMiniDisplay-price">
            {listing.startingBid}
          </span>{' '}
          -
          <a href="#" className="auctionMiniDisplay-viewLink">
            View Item
          </a>
        </div>
      </button>
    );
  }
}
