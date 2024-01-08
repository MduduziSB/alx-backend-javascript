export default function getListStudentIds(originalArr) {
  let newArr = [];
  if (!(originalArr instanceof Array)) {
    return newArr;
  }

  newArr = originalArr.map((item) => item.id);
  return newArr;
}
