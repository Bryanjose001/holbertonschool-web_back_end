export default function createInt8TypedArray(length,position,value){
    let buffer = new ArrayBuffer();
    let view = new DataView(buffer);
    view.setInt8(2,89);
    return 
}