/* eslint-disable */
function updateStudentGradeByCity(students, city, newGrades) {
    const studentsIn = students.filter((student) => student.location === city);
    return studentsIn.map((student) => {
      const filterG = newGrades.filter((grade) => grade.studentId === student.id);
      if (filterG.length > 0) {
        return {
          ...student,
          grade: filterG[0].grade,
        };
      }
      return {
        ...student,
        grade: 'N/A',
      };
    });
  }
  
  export default updateStudentGradeByCity;
