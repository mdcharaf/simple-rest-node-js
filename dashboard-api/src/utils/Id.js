import cuid from 'cuid';

export default Object.freeze({
  makeId: cuid,
  isValid: cuid.isCuid
});