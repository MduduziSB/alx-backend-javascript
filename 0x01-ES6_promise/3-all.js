import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((Res) => {
      console.log(`${Res[0].body} ${Res[1].firstName} ${Res[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
