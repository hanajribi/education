const mongoose = require("mongoose");
const eventSchema = mongoose.Schema({
  
  name: String,
  description: String,
  date: String,
  price: Number,
  img: String,
  userId :String
});
const Event = mongoose.model("Event", eventSchema);
module.exports = Event;