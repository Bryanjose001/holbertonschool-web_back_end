export default function appendToEachArrayValue(array, appendString) {
 let array = [];
    for (let value in array) {
    array.push(appendString + value);
  }

  return array;
}
