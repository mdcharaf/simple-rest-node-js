export default function makeDashboardRepo({ getDbClient }) {
  return Object.freeze({
    list,
    insert,
    remove
  });

  async function list() {
    const dbClient = await getDbClient();
    const result = await dbClient
      .collection('dashboards')
      .find()
      .toArray();

      return result.map(({ _id: id, ...doc }) => ({ id, ...doc }));
  }

  async function insert({ id: _id, ...obj }) {
    const dbClient = await getDbClient();
    const result = await dbClient
      .collection('dashboards')
      .insertOne({ _id, ...obj });

    return { id: result.insertedId, ...obj };
  }

  async function remove({ id: _id }) {
    const dbClient = await getDbClient();
    const result = await dbClient
      .collection('dashboards')
      .deleteOne({ _id });

    return result.deletedCount;
  }
}