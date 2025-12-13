export default function appendToEachArrayValue(array, appendString) {
 let array = [];
    for (let value of array) {
    array.push(appendString + value);
  }

  return array;
}
