db.doctors.find({}).forEach(function(doc){
    id = doc["_id"]
    n = doc["patients_number"]
    price = 60.0
    earnings = price* n
    net_earnings = earnings *90.0/100.0
    db.doctors.update({"_id":id},{$set:{"earnings":earnings, "net_earnings": net_earnings}})
});