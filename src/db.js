import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const db_pass = process.env.DB_PASS;
const db_user = process.env.DB_USER;
const db_name = process.env.DB_NAME;

const uri = `mongodb+srv://${db_user}:${db_pass}@cluster0.hotz3.mongodb.net/?retryWrites=true&w=majority&appName=${db_name}`;
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

export const connectDB = async () => {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri);
    /* await mongoose.connection.db.admin().command({ ping: 1 }); */
    console.log("You successfully connected to MongoDB!");
  } catch (error) {
    console.log(error);
    return;
  }
};
