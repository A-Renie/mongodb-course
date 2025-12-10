let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
// USE technocite
db = db.getSiblingDB('sample_mflix');

// SELECT title FROM movies WHERE released IS NULL
const movies = db.movies
.find({
    released:  {
        $exists: false
    }
})
.projection({
    title: true,
    _id: false
});

console.log(movies);

