const { MongoClient } = require('mongodb');

const MONGO_DB_URL = process.env.MONGO_DB_URL || 'mongodb://127.0.0.1:27017'; // ou coloque sua URL do MongoDB aqui
const DB_NAME = process.env.DB_NAME || 'jwt_exercise';

let conn = null;

const connection = async () => {
  conn = conn || (await MongoClient.connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }));
  return conn.db(DB_NAME);
};

module.exports = connection;
