export default function makeDashboardRepo({ getDbClient }) {
  return Object.freeze({
    insert
  })

  async function insert(obj) {
    const dbClient = await getDbClient();
    const result = await dbClient.collection('dashboards').insertOne(obj);
    return result.ops[0];
  }
}