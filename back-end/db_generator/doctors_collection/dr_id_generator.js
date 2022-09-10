db.doctors.find({}).forEach(function(doc){
    id = doc["_id"]
    db.doctors.update({"_id":id},{$set:{"dr_id":id}})
});