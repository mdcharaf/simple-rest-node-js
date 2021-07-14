export default function makeDashboardRepo({ getDbClient }) {
  return Object.freeze({
    insert
  });

  async function insert({ id: _id, ...obj }) {
    const dbClient = await getDbClient();
    const result = await dbClient
      .collection('dashboards')
      .insertOne({ _id, ...obj });

    return { id: result.insertedId, ...obj };
  }
}