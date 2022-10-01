import { connect } from 'mongoose';
import 'dotenv/config';

const MONGO_DB_URL = 'mongodb://localhost:27017';

const options = {
  autoIndex: false,
  dbName: 'PokemonTrainerParty',
};

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || MONGO_DB_URL,
) => connect(mongoDatabaseURI, options);

export default connectToDatabase;
