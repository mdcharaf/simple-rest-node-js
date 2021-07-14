export default function buildMakeChart({ Id }) {
  return function makeChart({
    id = Id.makeId(),
    dashboardId,
    title,
    type,
    range,
    interval
  }) {
    if (!Id.isValid(id)) {
      throw new Error('Invalid dashboard id');
    }

    if (!Id.isValid(dashboardId)) {
      throw new Error('Invalid Dashboard Id');
    }

    if (!title) {
      throw new Error('Invalid chart title');
    }

    if (!['line', 'pie', 'bar'].find(t => t === type)) {
      throw new Error('Invalid chart type, choose among line, pie or bar');
    }

    if (!range || typeof range !== 'string') {
      throw new Error('Invalid range value, use range format {from}-{to}');
    }

    const dates = range.split('-');
    if (dates.length !== 2) {
      throw new Error('Invalid range value, use range format {from}-{to}');
    }

    const from = Date.parse(dates[0]);
    const to = Date.parse(dates[1]);
    if (!from || !to || to < from) {
      throw new Error('Invalid date range values');
    }
    
    if (!['hour', 'day', 'month'].find(x => x === interval)) {
      throw new Error('Invalid interval value');
    }

    const diffInHours = (to - from) / 1000 * 60 * 60;
    if (interval === 'hour' && diffInHours > 7) {
      throw new Error('Cannot use interval hour when date range is more than 7 hours');
    }

    return Object.freeze({
      id,
      dashboardId,
      title,
      type,
      range,
      interval
    });
  }
}