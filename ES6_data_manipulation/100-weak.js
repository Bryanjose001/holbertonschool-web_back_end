export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let count = weakMap.get(endpoint);
  if (count === undefined) {
    count = 0;
  }
  count += 1;
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, count);
}