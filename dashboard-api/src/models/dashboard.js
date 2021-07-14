export default function buildMakeDashboard ({ Id }) {
  return function makeDashboard ({ id = Id.makeId(), title, description, charts = [] }) {
    if (!Id.isValid(id)) {
      throw new Error('Invalid dashboard id')
    }

    if (!title) {
      throw new Error('Invalid dashboard title')
    }

    if (!description) {
      throw new Error('Invalid dashboard descrption')
    }

    if (title.length > 50) {
      throw new Error('Dashboard title length must be less than 50')
    }

    if (description.length > 250) {
      throw new Error('Dashboard description length must be less than 250')
    }

    return Object.freeze({
      id,
      title,
      description,
      charts
    })
  }
}
