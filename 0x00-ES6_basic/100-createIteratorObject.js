export default function createIteratorObject(report) {
    const result = [];
    for (const id of Object.values(report.allEmployees)) {
      result.push(...id);
    }
    return result;
  }
