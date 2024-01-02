export default function createIteratorObject(report) {
  return (function* generateEmployeeIterator() {
    for (const departmentEmployees of Object.values(report.allEmployees)) {
      yield* departmentEmployees;
    }
  })();
}
