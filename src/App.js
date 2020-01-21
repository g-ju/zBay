import React from 'react';
import './styles.css';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Listing from './ListingModel';
import {fetchListings} from './api.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItemID: 1,
      bidder: null,
      listings: [
        new Listing(
          1, 
          'GemStone', 
          'https://media-exp1.licdn.com/dms/image/C4E0BAQEuhu2FosHBqQ/company-logo_200_200/0?e=2159024400&v=beta&t=cZUg5oiIELv6Yizwx19cj-F2wStjEU_4DgikYL_-4QE', 
          14.95, 
          'description', 
          123
        ),
        new Listing(
          2, 
          'Ikon Triangle', 
          'data:image/jpeg;base64,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', 
          500, 
          'description2', 
          456
        ),
        new Listing(
          3, 
          'Kitchen Scene', 
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6naDoByhHrZy48wVB90JXgEPYoTHm53t68-VGnVrytqo7FZ1a&s', 
          234.95, 
          'description', 
          123
        ),
        new Listing(
          4, 
          'Julio G!', 
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFC4J0IXZckocuahkfGhagKz_wsB0wHToC-AVSP5T80oQuEnHsQ&s', 
          100, 
          'description2', 
          456
        )
      ]
    };

    this.handleListingChange = this.handleListingChange.bind(this);
  }

  handleListingChange(listingID) {
    this.setState({
      selectedItemID: listingID,
    });
  }

  async componentDidMount() {
    //const fetchedListings = fetchListings();
    this.setState({
      listings: await fetchListings()
    })
  }

  render() {
    const {listings, selectedItemID} = this.state;
    const selectedListing = listings.find(i => i.id === selectedItemID)

    return (
      <div className="app">
        <Header />

        <div id="content">
          <Sidebar listings={listings} itemChangedHandler={this.handleListingChange} />

          <Main listing={selectedListing} />
        </div>
      </div>
    );
  }
}
