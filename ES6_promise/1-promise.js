export default function getResponseFromAPI(success){
    return new Promise((resolve,rejected) => {
    if(success){
        resolve({status:200, body: 'Success'})
    }else{
         rejected(Error('The fake API is not working currently'))   
        }
    })
}