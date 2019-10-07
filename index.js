import mongoose from 'mongoose'
import { connect } from "./config/db"
import { Movie } from "./models/schema"

// Connect to the DB
connect('mongodb://localhost:27017/movies')

// Get the Movie model
// Creating and using movies:
let m = new Movie({
  "title": "The Shawshank Redemption",
  "year": 1994,
  "rated": "R",
  "genre": "Crime, Drama",
  "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  "poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "rating": 9.3,
  "votes": 1078045,
  "imdbID": "tt0111161"
})

m.save(err => {
  if(err){
    console.log("Unable to add movie: " + err)
  } else {
    console.log("Movie added successfully")
  }

  mongoose.connection.close()
})

