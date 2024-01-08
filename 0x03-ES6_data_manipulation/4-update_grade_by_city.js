export default function updateStudentGradeByCity(students, city, newGrades) {
  const updatedStudents = students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);

      return {
        ...student,
        grade: matchingGrade ? matchingGrade.grade : "N/A"
      };
    });

  return updatedStudents;
}
