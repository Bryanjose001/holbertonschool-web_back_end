export default function createInt8TypedArray(length,position,value){
    let buffer = new ArrayBuffer(length)
    if(position >= length || position < 0){
        throw new Error('Position outside range')
    }
    let int8 = new Int8Array(buffer)
        int8[position] = value
    return int8
}
// 0,1,2,3