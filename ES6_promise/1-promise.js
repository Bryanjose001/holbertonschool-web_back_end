 export default function getFullResponseFromAPI(Success){
    return new Promise((resolve, reject) =>{
        if (true){
            resolve({status: 200, body: 'Success'});
        } else{
            reject(Error('The fake API is not working currently'));
        }
    });
}