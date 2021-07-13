export default class DashboardController
{
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