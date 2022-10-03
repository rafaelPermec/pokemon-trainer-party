import { connect } from 'mongoose';
import 'dotenv/config';

const MONGO_DB_URL = 'mongodb://localhost:27017';

const options = {
  autoIndex: false,
  dbName: process.env.DB_MONGO_DBNAME,
};

const connectToDatabase = (
  mongoDatabaseURI = process.env.DB_MONGO_URI
    || MONGO_DB_URL,
) => connect(mongoDatabaseURI, options);

export default connectToDatabase;
