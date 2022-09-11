const {faker} = require('@faker-js/faker');
const fs = require('fs');
const util = require("util");

const titles = [
    "Mr",
    "Miss",
    "Mrs",
    "Ms",
    "Madam",
    "Sir"
]
function generatePatients(){
    let patients = []
function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
    
    
    for (var i=0; i < 112; i++) {
        let forename = faker.name.firstName();
          let surname = faker.name.lastName();
          let email_address = forename +"."+surname +"@myemail.com";
          let phone_number = faker.phone.number()
          let randomDOB = randomDate(new Date(1930, 0, 1), new Date(2002, 0, 1))
          var randomNumber = Math.floor(Math.random()*titles.length);
          let title = titles[randomNumber]

          let job_title =faker.name.jobTitle()

          patients.push({
            "forename": forename,
            "surname": surname,
            "title":title,
            "email_address": email_address,
            "phone_number": phone_number,
            "dob":randomDOB,
            "job_title": job_title
        });
        }
        return {patients}    
}
let dataObj = generatePatients();
var obj_str = util.inspect(dataObj);

console.log(obj_str);
fs.writeFile('patients2.txt', obj_str, (err) => {

  // In case of a error throw err.
  if (err) throw err;
});




//The Schema of the patient is of the type {
//     "forename": "",
//     "surname":"",
//     "title": "",
//     "dob": ISODate(""),
//     "patient_id":"",
//      "job_title":"",
//     "appointments":[
//         {
//         "Specialist":"",
//         "date_appointment": ISODate(""),
//         "chat_id":"",
//     },
//     {
//         "Specialist":"",
//         "date_appointment": ISODate(""),
//          "chat_id":""
//     },
//     ....
//     ],
//     "email_address": "",
//     "phone_number": ""
// }