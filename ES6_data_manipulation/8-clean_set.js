 export default function cleanSet(set, startString) {
  let result = [];

  if (!startString || typeof startString !== 'string') {
    return '';
  }

  for (let value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }

  return result.join('-');
}
