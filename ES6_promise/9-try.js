export default function guardrail(mathFunction) {
 let queue = []

 try{
  let result = mathFunction()
  queue.push(result)
 }
 catch(error1){
  queue.push(error1.message)
 }
  finally{
    queue.push('Guardrail was processed')
  }
 return queue
}