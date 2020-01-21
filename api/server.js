const express = require('express');
const bodyParser = require("body-parser");
const _ = require('lodash');
const app = express();
const port = 3003;

function generateListing(id, title, img, startingBid, description) {
  return {
    id,
    title,
    img,
    startingBid,
    description,
    endTimestamp: Date.UTC(2020, 0, 24, Math.floor(Math.random() * 12), Math.floor(Math.random() * 60))
  }
}

function getListings() {
  return [
    generateListing(
      1,
      "Football signed by Ronaldo himself",
      "https://i.ebayimg.com/images/g/Xj4AAOSwNqNdbFpq/s-l1600.jpg",
      250,
      "A football, used in a game, signed by the great Ronaldo"
    ),
    generateListing(
      2,
      '16" MacBook Pro 2019',
      "https://i.ebayimg.com/images/g/d0AAAOSwCbJeH3Jc/s-l1600.jpg",
      1800,
      'Great condition, barely used, 16" MBP with a 512GB SSD.'
    ),
    generateListing(
      3,
      "Tic-Tacs (White) 1,000 pack",
      "https://i.ebayimg.com/images/g/TrUAAOSwMBdb4F5n/s-l500.jpg",
      34.95,
      "One thousand boxes of white Tic-Tacs, for the Tic-Tac crazed. Perfect gift for a birthday."
    ),
    generateListing(
      4,
      "Two turtledoves and 1 partridge",
      "https://i.pinimg.com/originals/0b/2a/5a/0b2a5a286100e0ce4971d47805b22cab.jpg",
      11,
      "Did you miss Christmas? Now's your chance to make it up to your special someone!"
    )
  ];
}

function toMonetary(number) {
  return parseFloat(number.toFixed(2));
}

function getAuctionStatus(id, lastBid) {
  console.log('received bid of ', lastBid);
  const isNewWinningBid = Math.random() > 0.5;

  if (isNewWinningBid) {
    return {
      highestBid: lastBid
    };
  } else {
    return {
      // Increase by a random percentage in the range of 1-20%
      highestBid: toMonetary(lastBid + lastBid * _.random(0, 0.2, true))
    };
  }
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET Listings
app.get("/listings", (req, res) => {
  res.json(getListings());
});


// GET auctionStatus(id)
app.post("/listings/:id", (req, res) => {
  res.json(getAuctionStatus(req.params.id, req.body.lastBid));
})


app.listen(port, () => { console.log(`Mini API listening on port ${port}`)});