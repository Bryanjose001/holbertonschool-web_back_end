export default function guardrail(mathFunction) {
  let queue= []
  try {
  let myresult = mathFunction(); 
    queue.push(myresult); 
  } catch (error) {
    queue.push(error.toString()); 
  }
  queue.push('Guardrail was processed'); 
  return queue; 
}