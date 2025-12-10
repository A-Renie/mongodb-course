let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
// USE technocite
db = db.getSiblingDB('sample_mflix');

// ==================FILMS AVEC KEANU
// const movies = db.movies
// .find({ 
// cast:"Keanu Reeves"
// })
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
// const movies = db.movies
//  .find({
//  $and: [
// { "imdb.rating": {$gte:8} },
// { "tomatoes.critic.rating": {$gte:8} }
//  ]
//  })
// .projection({
//     title: true,
//     year: true,
//     "imdb.rating":true,
//     "tomatoes.critic.rating":true,
//     _id: false
// })
// .sort({
//     year: 1
// })
// .limit(100);


// console.log(movies);

// const upsertResult = db.movies.updateOne({
//     year: -999
// }, {
//     $set: {
//         title: "Jurassic Pâques"
//     }
// },{
//     upsert: true
// });

// console.log(upsertResult);


// let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");

// db = db.getSiblingDB('technocite');


// db.students.updateOne({
//     _id: Object("....")
// }, {
//     $set: {
//         courses: ["Java", "C#", "Mysql"]
//     }
// });

// db = db.getSiblingDB('technocite');

// const students = db.students.find();

// const premierEtudiantId = students.toArray()[0]._id;

// // UPDATE students SET courses = ["Java", "C#", "Mysql"]
// const updateResult = db.students.updateOne({
//     _id: premierEtudiantId
// }, {
//     $set: {
//         courses: ["Java", "C#", "Mysql"]
//     }
// });

// console.log(updateResult);


// // ================== <Augmenter a 5 tous les films où Charlize Theron a joué
// db.movies
//  .updateMany(
//     {cast:"Charlize Theron"},
//     {$set:{"imdb.rating":5}}
//  )

// ================== Supprimer les films réalisés par Harald Zwart
// db.movies
//  .deleteMany(
//     {directors:"Harald Zwart"}
//  )

 // // ================== Ajouter l'acteur Key Key aux films "+1" et "Anamorph".
// db.movies
//  .updateMany(
//     {title:["+1","Anamorph"]},
//     {$push:{cast:"Key Key"}}
//  )

  // ================== Supprimmez "Keanu Reeves" de "The Matrix".
// db.movies
//  .updateOne(
//     {title:"The Matrix"},
//     {$pull:{cast:"Keanu Reeves"}}
//  )

// let matrix = db.movies.find(
//     {title:"The Matrix"}
// )

// console.log(matrix)

  // ================== Remplacez "Jurassic Park" par le film "The Matrix".
const jurassic=db.movies.find(
    {title:"Jurassic Park"}
)
console.log(jurassic)

db.movies
 .replaceOne(
    {title:"The Matrix"},
    jurassic[0]
 )







