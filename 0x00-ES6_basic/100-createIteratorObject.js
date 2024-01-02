export default function createIteratorObject(report) {
  let departments = Object.keys(report);
  const array = [];
  
  for(let key of departments) {
    for (let value of report[key]) {
      array.push(value);
    }
  }

  return array;
}
