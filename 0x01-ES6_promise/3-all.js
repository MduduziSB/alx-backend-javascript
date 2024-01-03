import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((responses) => {
      const photoRes = responses[0];
      const userRes = responses[1];

      console.log(`${photoRes.body} ${userRes.body.firstName} ${userRes.body.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
