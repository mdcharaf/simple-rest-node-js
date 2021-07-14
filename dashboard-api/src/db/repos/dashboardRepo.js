export default function makeDashboardRepo({ getDbClient }) {
  return Object.freeze({
    list,
    insert,
    remove,
    insertChart,
    removeChart
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

  async function insertChart({ dashboardId: _id, ...chartObj }) {
    const dbClient = await getDbClient();

    const result = await dbClient
      .collection('dashboards')
      .updateOne({ _id }, { $push: { charts: { ...chartObj } }});

    return result.modifiedCount;
  }

  async function removeChart({ dashboardId, chartId }) {
    const dbClient = await getDbClient();

    const result = await dbClient
      .collection('dashboards')
      .updateOne({ _id: dashboardId }, { $pull: { charts: { _id: chartId } }});

    return result.modifiedCount;
  }
}