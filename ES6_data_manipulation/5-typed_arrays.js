export default function createInt8TypedArray(length,position,value){
   let myBuffer = new ArrayBuffer(8)
   let myTyped8 = new DataView(myBuffer)
    if (position >= length || position < 0){
        throw new Error('Position outside range');
    }
   myTyped8[position] = value
    return myTyped8
}
// 0,1,2,3