export default function createIteratorObject(report) {
  return (function* _() {
    for (const d of Object.values(report.allEmployees)) {
      for (const e of d) {
        yield e;
      }
    }
  }());
}
