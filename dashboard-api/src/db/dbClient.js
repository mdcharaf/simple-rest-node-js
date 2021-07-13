import mongodb from 'mongodb';
import dotenv from 'dotenv'

dotenv.config();

const MongoClient = mongodb.MongoClient;
const url = process.env.DB_URL || 'mongodb://127.0.0.1:27017';
const dbName = process.env.DB_NAME || 'crowdanalyzer';
const client = new MongoClient(url, { useNewUrlParser: true })

export async function getDbClient() {
  if (!client.isConnected) {
    await client.connect();
  }
  return client.db(dbName);
}