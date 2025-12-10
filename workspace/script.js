let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
db=db.getSiblingDB("technocite");

const students = db.students.find({name:"Jean Sebastien"});

console.log(students)