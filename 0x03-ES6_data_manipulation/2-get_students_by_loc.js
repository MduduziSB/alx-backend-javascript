export default function getStudentsByLocation(originalArr, city) {
  const sameCity = originalArr.filter((student) => student.location === city);
  return sameCity;
}
