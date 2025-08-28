//function handleResponseFromAPI(promise) {
    //const promise = getFullResponseFromAPI(true);
        //let success = true;
        //if (success){
            //promise.resolve().then(result => console.log(result));
        //} else{
            //promise.reject().then(result => console.log(result));
        //}
//}

function handleResponseFromAPI(promise) {
    return promise
    .then(() => {
        return { status: 200, body: "success"};
   })
    .catch(() => {
        return new Error();
    })
    .finally(() => {
        console.log("Got a response from the API");
    });
}
