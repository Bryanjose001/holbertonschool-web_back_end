export default function loadBalancer(chinaDownload, USDownload) {
    return Promise.all([chinaDownload, USDownload])
        .then((results) => (results[0] < results[1] ? 'China' : 'US'));

}