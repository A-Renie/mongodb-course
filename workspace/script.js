let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
db=db.getSiblingDB("formateur")

const inserted = db.students.insertOne({
    name:"Amaury"
})

console.log(inserted)