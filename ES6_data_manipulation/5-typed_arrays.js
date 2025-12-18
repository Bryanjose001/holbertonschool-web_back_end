export default function createInt8TypedArray(length,position,value){
    let buffer = new ArrayBuffer(length);
    let view = new DataView(buffer);
    view.setInt8(position,value);
    return buffer
}