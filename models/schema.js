import mongoose from 'mongoose'
const Schema = mongoose.Schema

let movieSchema = new Schema({
  title: String,
  poster: String,
  plot: String,
  imdbID: String,
  rating: Number,
  votes: Number,
  rated: String,
  year: Number,
  genre: String
})

export let Movie = mongoose.model("Movie", movieSchema)