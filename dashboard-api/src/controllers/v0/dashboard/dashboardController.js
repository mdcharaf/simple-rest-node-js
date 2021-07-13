export default class DashboardController
{
  constructor(repo) {
    this.repo = repo;
  }

  async list(req, res) {
    res.send('list');
  }

  async add(req, res) {
    res.send('add');
  }

  async delete(req, res) {
    res.send('delete');
  }
}