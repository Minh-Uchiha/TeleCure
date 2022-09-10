// import { faker } from '@faker-js/faker';
// import fs from 'fs'
const {faker} = require('@faker-js/faker');
const fs = require('fs');
const util = require("util");
const specialties = ["Allergy and Immunology",
    "Colon and Rectal Surgery",
    "Dermatology",
    "Family Medicine",
    "Internal Medicine", 
    "Neurological Surgery", 
    "Obstetrics and Gynecology",
    "Ophthalmology",
    "Orthopaedic Surgery",
    "Otolaryngology",
    "Anatomic Pathology and Clinical Pathology",
    "Pathology - Anatomic",
    "Pathology - Clinical",
    "Pediatrics",
    "Physical Medicine and Rehabilitation",
    "Plastic Surgery",
    "Occupational Medicine",
    "Public Health and General Preventive Medicine",
    "Psychiatry",
    "Psychotherapy",
    "Neurology",
    "Neurology with Special Qualification in Child Neurology",
    "Diagnostic Radiology",
    "Radiation Oncology",
    "Sports and Exercise Medicine",
    "Medical Physics",
    "Thoracic Surgery",
    "Urology",
    "Allergy and Immunology",
    "Colon and Rectal Surgery",
    "Dermatology",
    "Family Medicine",
    "Internal Medicine", 
    "Neurological Surgery", 
    "Obstetrics and Gynecology",
    "Ophthalmology",
    "Orthopaedic Surgery",
    "Otolaryngology",
    "Anatomic Pathology and Clinical Pathology",
    "Pathology - Anatomic",
    "Pathology - Clinical",
    "Pediatrics",
    "Physical Medicine and Rehabilitation",
    "Plastic Surgery",
    "Occupational Medicine",
    "Public Health and General Preventive Medicine",
    "Psychiatry",
    "Psychotherapy",
    "Neurology",
    "Neurology with Special Qualification in Child Neurology",
    "Diagnostic Radiology",
    "Radiation Oncology",
    "Sports and Exercise Medicine",
    "Medical Physics",
    "Thoracic Surgery",
    "Urology"]

    const hospitals = [
      "Mayo Clinic - Rochester",
      "Toronto General (University Health Network)",
      "Charité - Universitätsmedizin Berlin",
      "Universitätsspital Zürich",
      "Singapore General Hospital (SGH)",
      "Sheba Medical Center",
      "Karolinska Universitetssjukhuset",
      "Aarhus Universitetshospital",
      "Hôpital Universitaire Pitié Salpêtrière",
      "The University of Tokyo Hospital",
      "Hospital Clínic de Barcelona",
      "St Thomas' Hospital",
      "Samsung Medical Center",
      "Addenbrooke's",
      "All India Institute of Medical Sciences",
      "Azienda Ospedaliera di Padova",
      "Tampere University Hospital",
      "University of Colorado Hospital",
      "Ospedale San Raffaele - Gruppo San Donato",
      "Royal Brisbane & Women's Hospital",
      "Kyushu University Hospital",
      "Clinica Universidad de Navarra",
      "Bangkok Hospital",
      "Centro Medico Foianini",
      "Clinica Angel Foianini, Santa Cruz"

    ]
    function randomDecimal(min, max){
      return Math.random() * (max - min) + min;
    }
    function randomNumber(min, max) { 
      return Math.floor(Math.random() * (max - min) + min);
  } 
    function generateDoctors() {

        let doctors = []
      
        for (var i=0; i <= specialties.length; i++) {
          const random_hospital= Math.floor(Math.random() * hospitals.length);
          let dr_forename = faker.name.firstName();
          let dr_surname = faker.name.lastName();
          let email_address = dr_forename +"."+dr_surname +"@telecure.com";
          let phone_number = faker.phone.number()
          let hospital = hospitals[random_hospital]
          let experience = randomNumber(5, 11)
          let av_rating = randomDecimal(3.7, 4.8)
          let patients_number = randomNumber(10, 1001)
          let earnings = 20 * patients_number
          let net_earnings  = (earnings * 90.0)/100.0
      
          doctors.push({
              "specialty": specialties[i],
              "forename": dr_forename,
              "surname": dr_surname,
              "title": "Dr.",
              "email": email_address,
              "phone": phone_number,
              "hospital": hospital,
              "years_expirience":experience,
              "average_ratings": av_rating,
              "available": true,
              "patients_number": patients_number,
              "earnings": earnings.toFixed(2),
              "net_earnings": net_earnings.toFixed(2)
          });
        }
        //console.log(`doctors: ${doctors}`)
        return { doctors }
      }
      
      let dataObj = generateDoctors();
      var obj_str = util.inspect(dataObj);
      console.log(obj_str);
      fs.writeFile('doctors.txt', obj_str, (err) => {
      
        // In case of a error throw err.
        if (err) throw err;
    })

    //doctor schema of the type ```{
    //     "dr_forename": "",
    //     "dr_surname":"",
    //     "title": "",
    //     "speciality":"",
    //      "earnings": NumberLong(),
    //      "net_earnings":NumberLong(),
    //      "years_experience":NumberLong(),
    //      "hospital":"",
    //      "average_rating":"",
    //      "patients_number": NumberLong()
    //     "appointments":[
    //         {
    //         "forename":"",
    //         "surname":"",
    //         "date_appointment: ISODate(""),
    //         "patient_id": "",
    //         "rating":NumberLong()
    //     },
    //     {
    //         "forename":"",
    //         "surname":"",
    //         "date_appointment: ISODate(""),
    //         "patient_id": "",
    //          "rating":NumberLong()
    //     },
    //     ....
    //     ],
    //     "email_address": "",
    //     "phone_number":"",
    //     "available": true/false
    
    // }```