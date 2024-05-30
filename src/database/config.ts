// in this config file we will define the database connection
import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.Mongo_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('Connected to the database');
        })

        connection.on('error', () => {
            console.log('Error connecting to the database');
        })
    } catch (e) {
        console.log('Something goes wrong!');
        console.log(e);
    }
}