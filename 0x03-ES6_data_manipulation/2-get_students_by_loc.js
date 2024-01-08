export default function getStudentsByLocation(originalArr, city) {
  let sameCity = [];
  if (!(sameCity instanceof Array)) {
    return sameCity;
  }

  sameCity = originalArr.filter((student) => student.location === city);
  return sameCity;
}
