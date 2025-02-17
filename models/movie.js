const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: String,
  stars: { enum: [] },
  image: String,
  description: String,
  showtimes: { enum: [] },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
