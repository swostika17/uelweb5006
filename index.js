// Database Connection String : 
// "mongodb+srv://user:user@cluster08130.eoqwb.mongodb.net/"

mongoose = require('mongoose');
//app = express();
const MONGO_URI = 'mongodb+srv://user:user@cluster08130.eoqwb.mongodb.net/Week8';
 mongoose.connect(MONGO_URI, {useUnifiedTopology: true,useNewUrlParser: true}) ; const db = mongoose.connection;
db.on('error', function(err){
    console.log("Error occured during connection"+err) }
);
db.once('connected', function() { console.log(`Connected to ${MONGO_URI}`); });
// creating the scheme
const PersonScheme = new mongoose.Schema({ name: { type: String, required: true
},
age: Number, Gender:String, Salary:Number
});
// creating model named as modelname with collection named as personCo llection
const person_doc = mongoose.model('modelname', PersonScheme,'personCollectio n');
// creating a single document
const doc1 = new person_doc({ name: 'swostika',age:32,Gender:"female",Salary:555456 }

);
// adding one document in the collection
doc1
    .save()
    .then((doc1) => {
console.log("New Article Has been Added Into Your DataBase.",doc1); })
    .catch((err) => {
        console.error(err);
});
manypersons=[
{ name: 'Simon',age:42,Gender:"Male",Salary:3456 } ,
{ name: 'Neesha',age:23,Gender:"Female",Salary:1000 },
{ name: 'Mary',age:27,Gender:"Female",Salary:5402 },
{ name: 'Mike',age:40,Gender:"Male",Salary:4519 }
]
person_doc.insertMany(manypersons).then(function(){ console.log("Data inserted") // Success
}).catch(function(error){ console.log(error) // Failure
});
person_doc.find({})

.sort({Salary:1})
.select('name Salary age')
.limit(10)
.exec()
.then(docs => {
    console.log("showing multiple documents")
    docs.forEach(function(Doc){
        console.log(Doc.age,Doc.name);
    })
})
.catch(err =>{
    console.error(err)
});
 var givenage=30
 person_doc.find({Gender:"female",age:{$givenage}})
 .sort({Salary:1})
 .select('name Salary age')
 .limit(10)
 .exec()
 .then(docs=>{
    console.log("showing age greater then 15", givenage)
    docs.forEach(function(Doc){
        console.log(Doc.age,Doc.name);
    })
 })
 .catch(err=>{
    console.error(err)
 })
 person_doc.countDocuments().exec()
 .then(count=>{
    console.log("total documents count:", count)
 })
 .catch(err =>{
    console.error(err)
 })
 person_doc.deleteMany({ age: { $gte: 25 } }) .exec()
.then(docs=>{
console.log('deleted documents are:',docs);
}).catch(function(error){ 
    console.log(error);
}); 
person_doc.updateMany({ Gender: "Female" },{Salay:5555}) .exec()
.then(docs=>{ console.log("update")
console.log(docs); // Success 
}).catch(function(error)
{console.log(error); // Failure
}); 
                         
                         