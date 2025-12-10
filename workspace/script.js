let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
// USE technocite
db = db.getSiblingDB('sample_mflix');

// ==================FILMS AVEC KEANU
// const movies = db.movies
// .find({ cast:"Keanu Reeves"

// },

// )
// .projection({
//     title: true,
//     year: true,
//     _id: false
// })
// .limit(100);


// ==================FILMS COMEDIES
// const movies = db.movies
// .find({ genres:"Comedy"
// }
// )
// .projection({
//     title: true,
//     year: true,
//     _id: false
// })
// .limit(100);

// ==================FILMS SORTIS ENTRE 2002 et 2008
// const movies = db.movies
// .find({ 
//     year:{
//         $in :[2002,2003,2004,2005,2006,2007,2008]
//     }
// }
// )
// .projection({
//     title: true,
//     year: true,
//     _id: false
// })
// .limit(100);


// ==================FILMS SORTIS ENTRE 2002 et 2008 VERSION 2
// const movies = db.movies
//  .find({
//  $and: [
//  { year: {$gte:2002} },
//  { year: {$lte:2008} },
//  ]
//  })
// .projection({
//     title: true,
//     year: true,
//     _id: false
// })
// .limit(100);

// ==================FILMS SORTIS AVEC Chris O'Donnell et Matt Damon
// const movies = db.movies
//  .find({
//  $and: [
//  { cast: "Chris O'Donnell" },
//  { cast: "Matt Damon" },
//  ]
//  })
// .projection({
//     title: true,
//     year: true,
//     _id: false
// })
// .limit(100);

// ==================FILMS Réalisés par Neil Burger ou Brad Furman
// const movies = db.movies
//  .find({
//  $or: [
//  { directors: "Neil Burger" },
//  { directors: "Bard Furman" },
//  ]
//  })
// .projection({
//     title: true,
//     year: true,
//     _id: false
// })
// .limit(100);

// // ==================FILM LE PLUS VIEUX
// const movies = db.movies
//  .find({
//  })
// .projection({
//     title: true,
//     year: true,
//     _id: false
// })
// .sort({
//     year: 1
// })
// .limit(3);

// ==================JAMAIS SORTIS
// const movies = db.movies
//  .find({
//     released: { $exists: false }
//  })
// .projection({
//     title: true,
//     year: true,
//     _id: false
// })
// .sort({
//     year: 1
// })
// .limit(100);

// ================== qui ont une note IMDB supérieure à 8.0 et un rating supérieur à 8 des critiques
const movies = db.movies
 .find({
 $and: [
{ "imdb.rating": {$gte:8} },
{ "tomatoes.critic.rating": {$gte:8} }
 ]
 })
.projection({
    title: true,
    year: true,
    "imdb.rating":true,
    "tomatoes.critic.rating":true,
    _id: false
})
.sort({
    year: 1
})
.limit(100);


console.log(movies);

