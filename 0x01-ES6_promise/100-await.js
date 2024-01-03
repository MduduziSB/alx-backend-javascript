import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let res = {};

  try {
    const loadPhoto = await uploadPhoto();
    const newUser = await createUser();
    res = { loadPhoto, newUser };
  } catch (err) {
    res = { loadPhoto: null, newUser: null };
  }
  return res;
}
