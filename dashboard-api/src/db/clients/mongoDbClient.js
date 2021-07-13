import { MongoClient } from 'mongodb';
import { config } from '../../config';

const url = config.dbUrl || 'mongodb://127.0.0.1:27017';
const dbName = config.dbName || 'crowdanalyzer';
const client = new MongoClient(url, { useNewUrlParser: true })

export async function getDbClient() {
  if (!client.isConnected) {
    await client.connect();
  }
  return client.db(dbName);
}