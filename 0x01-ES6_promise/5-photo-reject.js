export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    reject(new Error(`File ${fileName} cannot be processed`));
  });
}
