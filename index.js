import mongoose from "mongoose"
import { connect } from "./config/db"
import { Person, Movie } from "./models/schema"

connect("mongodb://localhost:27017/movies")

// Querying for a record
Person.find().populate('movies').exec((err, people) => {
  console.log(people[0]);
})

// Adding a new director
let p = new Person({
  first_name: "Matthew",
  last_name: "Young",
  mi: ""
}).save(err => {
  if (err) {
    console.log("Unable to save a new person")
  } else {
    console.log("Person successfully saved")
  }
})

// Updating a movie by adding a review
Movie.findOne({ title: "The Godfather" }).exec((err, movie) => {
  console.log(movie)
  movie.reviews.push({
    comment: "This movie is great!",
    posted_at: new Date()
  })

  movie.save(err => {
    if (err) {
      console.log("Unable to save a movie")
    } else {
      console.log("Movie successfully saved")
    }
  })
})

//mongoose.connection.close()




