import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)
  ]).then((returned)=>{
    const results = []
    let user = returned[0]

    if(user.status == 'fulfilled'){
      results.push({status: user.status, value: user.value})
    }
    else{
      results.push({status: user.status, value: user.reason})
    }
    let photo1 = returned[1]
  
    if(photo1.status =='fulfilled'){
      results.push({status: photo1.status, value: photo1.value})
    }
    else{
      results.push({status: photo1.status, value: photo1.reason})
      }
      return results
    });
}
