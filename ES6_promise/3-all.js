import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
 return Promise.all([uploadPhoto(), createUser()]).then((values)=>{
  let photo = values[0]
  let user = values[1]
  console.log(`${photo.body} ${user.firstName} ${user.lastName}`)
 })
 .catch(()=>{
  console.log('Signup system offline')
 })
}