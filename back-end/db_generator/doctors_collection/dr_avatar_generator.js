const men = [
    "https://storage.googleapis.com/telecure/man_1.png",
    "https://storage.googleapis.com/telecure/man_2.png",
    "https://storage.googleapis.com/telecure/man_3.png"
]

const women = [
    "https://storage.googleapis.com/telecure/woman_1.png",
    "https://storage.googleapis.com/telecure/woman_2.png",
    "https://storage.googleapis.com/telecure/woman_3.png"
] 

function randomImage(index){
let random_img = ""
    if (index % 2== 0){
        //male
        random_n= Math.floor(Math.random() * men.length)
        random_img = men[random_n]
    }else{
        //female
        random_n= Math.floor(Math.random() * women.length)
        random_img = women[random_n]
    }
 return  random_img
}
var i =0;
db.doctors.find({}).forEach(function(doc){
    id = doc["_id"]
    let random_img = randomImage(i)
    db.doctors.update({"_id":id},{$set:{"avatar":random_img}})
    i++
});