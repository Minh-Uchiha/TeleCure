const { connect } = require('getstream');
const bcrypt = require('bcrypt');
const StreamChat = require('stream-chat');
const crypto = require('crypto');

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const patientSignup = async (req, res) => {
    try{
        const { forename, surname, title, email_address, job_title, age, password, phone_number, dob } = req.body;

        const userId = crypto.randomBytes(16).toString('hex');

        const serverClient = connect(api_key, api_secret, app_id);
        //encrypt password
        const hashedPassword = await bcrypt.hash(password, 10)

        const token = serverClient.createUserToken(userId);

        res.status(200).json({ token, forename, surname, title, email_address, job_title, age, hashedPassword, phone_number, dob });
    } catch (error){
        console.log(error);

        res.status(500).json({ message: error });
    }
}

const patientLogin = async (req, res) => {
    try{
        const { email_address, password } = req.body;

        const serverClient = connect(api_key, api_secret, app_id);
        const client = StreamChat.getInstance(api_key, api_secret);

        const { users } = await client.queryUsers({ email_address: email_address });

        if(!users.length) return res.status(400).json({ message: "User not found" });

        const success = await bcrypt.compare(password, users[0].hashedPassword);

        const token = serverClient.createUserToken(users[0].id);

        if(success){
            res.status(200).json({ token, forename: users[0].forename, surname: users[0].surname, title, email_address, job_title, age, password, phone_number, userId: users[0].id});
        } else{
            res.status(500).json({message: "Incorrect password" });
        }
    } catch (error){
        console.log(error);

        res.status(500).json({ message: error });
    }
}

const doctorSignup = async (req, res) => {
    try{
        const { specialty, dr_forename, dr_surname, title, email_address, hospital, years_expirience, password, phone_number, avatar } = req.body;

        const userId = crypto.randomBytes(16).toString('hex');

        const serverClient = connect(api_key, api_secret, app_id);
        //encrypt password
        const hashedPassword = await bcrypt.hash(password, 10)

        const token = serverClient.createUserToken(userId);

        //defaults
        const avarage_ratings = 0;
        const available = true;
        const earnings = 0;
        const net_earnings = 0;

        res.status(200).json({ token, specialty, dr_forename, dr_surname, title, email_address, hospital, years_expirience, avarage_ratings, available, earnings, net_earnings, hashedPassword, phone_number, avatar});
    } catch (error){
        console.log(error);

        res.status(500).json({ message: error });
    }
}

const doctorLogin = async (req, res) => {
    try{
        const { email_address, password } = req.body;

        const serverClient = connect(api_key, api_secret, app_id);
        const client = StreamChat.getInstance(api_key, api_secret);

        const { users } = await client.queryUsers({ email_address: email_address });

        if(!users.length) return res.status(400).json({ message: "User not found" });

        const success = await bcrypt.compare(password, users[0].hashedPassword);

        const token = serverClient.createUserToken(users[0].id);

        if(success){
            res.status(200).json({ token, specialty, dr_forename: users[0].dr_forename, dr_surname: users[0].dr_surname, title, email_address, hospital, years_expirience, average_ratings, available, earnings, net_earnings, hashedPassword, phone_number, avatar, userId: users[0].id});
        } else{
            res.status(500).json({message: "Incorrect password" });
        }
    } catch (error){
        console.log(error);

        res.status(500).json({ message: error });
    }
}