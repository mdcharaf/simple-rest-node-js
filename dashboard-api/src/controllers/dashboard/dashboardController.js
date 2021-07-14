export default function makeDashboardController({ dashboardRepo }) {
  return Object.freeze({
    list,
    add,
    remove,
  });

  async function list(req, res) {
    res.send('list');
  }

  async function add(req, res) {
    const result = await dashboardRepo.insert(req.body);
    res.send(result);
  }

  async function remove(req, res) {
    res.send('delete');
  }
}