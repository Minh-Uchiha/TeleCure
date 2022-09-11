db.patients.find({}).forEach(function(doc){
    id = doc["_id"]
    db.patients.update({"_id":id},{$set:{"patient_id":id}})
});