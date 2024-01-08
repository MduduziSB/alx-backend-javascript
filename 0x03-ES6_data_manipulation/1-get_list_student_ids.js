export default function getListStudentIds(originalArr) {
  if (!Array.isArray(originalArr)) {
    return [];
  }

  const newArr = originalArr.map((item) => item.id);
  return newArr;
}
