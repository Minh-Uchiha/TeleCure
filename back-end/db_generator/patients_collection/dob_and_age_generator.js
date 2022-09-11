function getAge(birthYear){
	var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - birthYear;
    return age;
}
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
db.patients.find({}).forEach(function(doc){
    id = doc["_id"]
    let randomDOB = randomDate(new Date(1930, 0, 1), new Date(2002, 0, 1))
    let yearOfBirth = randomDOB.getFullYear() 
    agePatient = getAge(yearOfBirth) 
    db.patients.update({"_id":id},{$set:{"dob":randomDOB, "age": agePatient}})
});