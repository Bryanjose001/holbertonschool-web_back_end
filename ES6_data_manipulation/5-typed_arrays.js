export default function createInt8TypedArray(lenght,position,value){
    let buffer = new ArrayBuffer(8);
    let view = new DataView(buffer);
    lenght = 10
    position = 2
    value = 89
    DataView.setInt8(position) = value
    return 
}