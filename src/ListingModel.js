export default class Listing {
  constructor(id, title, img, startingBid, description, endTimestamp) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.startingBid = startingBid;
    this.description = description;
    this.endTimestamp = endTimestamp;
  }
}
