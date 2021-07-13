import { MongoClient } from 'mongodb';

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'crowdanalyzer';
const client = new MongoClient(url, { useNewUrlParser: true })

export async function getDbClient() {
  if (!client.isConnected) {
    await client.connect();
  }
  return client.db(dbName);
}