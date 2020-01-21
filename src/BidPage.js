import React from 'react'
import Sidebar from './Sidebar';
import Main from './Main';

export default class BidPage extends React.Component {
  render() {
    const { listings, itemChangedHandler, listing } = this.props;
    return (
      <>
        <Sidebar listings={listings} itemChangedHandler={itemChangedHandler} />

        <Main listing={listing} />
      </>
    )
  }
}