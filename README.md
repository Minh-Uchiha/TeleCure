# TeleCure
A web application that provide remote healthcare 
## Inspiration
Due to Covid-19, many patients have had difficulties obtaining specialist medical advice. In some cases, the hurdles may be that the patient lives in a rural or poor area where medical care is not provided. 
In the past few years, Telemedicine has gained an essential role in the healthcare sector. Remote healthcare helps alleviate these boundaries. For this reason, our team has embarked on a new project: TeleCure a web application that provides remote healthcare for everyone!
Price for a consultations may varies per country and they can be very costly (e.g. for a consultation with a psychiatrist in the UK one might spend  $632. Whilst on average a specialist in the US charge upward of $250). For this reason we have decided to provide a more affordable service: $60 per consultation.

## What it does
TeleCure can be accessed in two ways, as a doctor or as a patient. Access is granted from the home page 
![TeleCure Home Page](https://storage.googleapis.com/telecure/doctor_button.png)

**DOCTOR DASHBOARD**
- If you are a Doctor and are new to TeleCure, you can sign up. 
![Doctor Sign up page](https://storage.googleapis.com/telecure/doctor_signup.png)
- If you already have a profile you can Sign in 
![Doctor Sign in page](https://storage.googleapis.com/telecure/doctor_sign_in.png)
- Once Signed in the Doctor can access or edit their profile. Their rating and appointment history is also visible, together with the net earnings.
![Doctor Profile](https://storage.googleapis.com/telecure/doctor_profile_2.png)
- Doctors will receive requests for consultations and depending on their availability they can accept or reject the request.

**PATIENT DASHBOARD**
- If you are a patient and are new to TeleCure you can sign up via the patient button
![Patient Sign up button](https://storage.googleapis.com/telecure/patient_button.png)
![Patient Sign up Page](https://storage.googleapis.com/telecure/patient_sign_up.png)
- if you are already registered you can sign in 
![Patient Sign In Page](https://storage.googleapis.com/telecure/patient_sign_in.png)
- Once you log in to TeleCure you can request a consultation. 
![Book A Consultation Now!](https://storage.googleapis.com/telecure/Screenshot%20from%202022-09-10%2021-30-39.png)
- To confirm the booking, enter the payment and you are all set!
![Payment Page](https://storage.googleapis.com/telecure/paymant_page.png)
- Once the booking is confirmed you will be able to chat via message and video with the medical provider.
![Chat with your Medical Provider](https://storage.googleapis.com/telecure/chat.png)

## How we built it

TeleCure is built using MERN stack (MongoDB, Express, React and Node). 

**BACKEND**
For the development environment we have created a database using a mongoDB cluster and generated synthetic data via a JavaScript. The database has 3 collections, doctors, patients and chat_history collections. 

We created a database using a MongoDB cluster for the development environment and generated synthetic data via JavaScript. The database has three collections, doctors, patients and chat_history collections. 

The doctors' collection contains the doctors' information, such as specialty, years of experience number of patients (i.e. number of consultations).

The schema is of the type 

![Schema Doctor](https://storage.googleapis.com/telecure/svhema_doctor.png)

The patients' collection contains the patients' details, including chat logs.
The chat_history collection contains the chat histories between the patients and their respective specialists.

The schema is of the type

![Schema Patient](https://storage.googleapis.com/telecure/schema_patient.png)

**FRONTEND**
For the front end we have used React.JS and CSS 


## Challenges we ran into
We ran into few challenges in building the videochat feature using twillio.

## Accomplishments that we're proud of
Being able to bring this idea to reality with a prototype, integrate the backend and frontend
## What we learned
We learned a lot about REST API and Twillio
## What's next for TeleCure
Next for us is to embed successfully the video chat 

