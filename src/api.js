import Listing from './ListingModel';

const API_URL = "https://zbay.ngrok.io/listings";

export async function fetchListings(){
  const res = await fetch(API_URL);
  const data = await res.json();

  const listings = data.map(l => new Listing(l.id, l.title, l.img, l.startingBid, l.description, l.endTimestamp));

  return listings;
}