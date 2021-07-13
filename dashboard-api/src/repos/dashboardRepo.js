export default class DashboardRepo
{
  constructor(getDbClient) {
    this.getDbClient = getDbClient;
  }

  async insert(dashboard) {
    const dbClient = await this.getDbClient();
    dbClient.collection('crowdanalyzer').insertOne(dashboard);
  }
}