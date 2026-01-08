export default function handleResponseFromAPI(promise){
    return promise.then(() =>{
        return{
            status: 200,
            body:'success'}
    })
    
}
  