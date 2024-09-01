import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcryptjs from 'bcryptjs'
import { reg_model } from './models/reg.model.js';
import { server } from './config/server.config.js';
import { reg_route } from './routes/reg.route.js';
const app = express();
import { login_route } from './routes/login.route.js';
import { contact_data } from './routes/contact.route.js';
import { verify_Mobile } from './routes/verifyMobile.js';
app.use(cors());
app.use(express.json());
mongoose.connect(server.DB_URL)
const db = mongoose.connection

db.on('error', () => {
    console.log("Error while connecting the database !")
})

db.once('open', () => {
    console.log("Database connected successfully !");
    init()
})

const init = async () => {
    const user = await reg_model.findOne({ userType: 'ADMIN' })
    if (user) {
        console.log("Admin is already present ");
        return
    }
    try {
        admin_user = await reg_model.create({
            name: 'Safar',
            email: 'admin@gmail.com',
            password: bcryptjs.hashSync("admin", 8),
            mobNum : 1234567890,
            userType: 'ADMIN'

        })
        console.log('Admin is created ', admin_user);

    }
    catch (error) {
        console.log("Error while creating the admin ");

    }


}

reg_route(app)
login_route(app)
contact_data(app)
verify_Mobile(app)

app.listen(server.PORT, () => {
    console.log(`Server is running on port ${server.PORT}`);
});
