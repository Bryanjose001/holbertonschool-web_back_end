 export default function cleanSet(set, startString) {
let array1 = []
    for(let word of set){
      if(word.startsWith(startString))
        array1.push(word.slice(startString.length))
    }
  return array1.join('-');
}
