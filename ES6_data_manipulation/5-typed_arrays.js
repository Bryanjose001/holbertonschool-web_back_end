export default function createInt8TypedArray(lenght,position,value){
    let buffer = new ArrayBuffer(8);
    let view = new Int32Array(buffer);
    return ArrayBuffer
}