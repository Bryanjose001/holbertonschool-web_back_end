import signupuser from '4-user-promise.js';
import uploadphoto from '5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName)
{
    return Promise.all([
        signupuser(firstName, lastName),
        uploadphoto(fileName),
    ]).then((results) => {
        return results.map((result) => ({
            status: result.status, value: result.value 
        }));
    })
    };
