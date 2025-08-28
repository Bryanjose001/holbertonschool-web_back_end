function handleResponseFromAPI(promise)
{
    return promise
        .then((result) => {
            console.log('Got a response from the API');
            return result;
        })
        .catch((error) => {
            console.log(error.message);
        });
}