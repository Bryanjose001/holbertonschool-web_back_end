import signupuser from '4-user-promise.js';
import uploadphoto from '5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName)
{
    const thepromise1 = signupuser
    const thepromise2 = uploadphoto
    return Promise.allSettled([thepromise1, thepromise2
    ]).then((results) => {
        return results.map((result) => ({
            status: result.status, value: result.status === 'fulfilled' ? result.value : `Error: ${result.reason.message}`,
        }));
    })
    };
