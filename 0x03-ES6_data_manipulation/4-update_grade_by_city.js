function updateStudentGradeByCity(students, city, newGrades) {
  const sameCity = students.filter((student) => student.location === city);
  return sameCity.map((student) => {
    const updatedGrades = newGrades.filter((grade) => grade.studentId === student.id);
    if (updatedGrades.length > 0) {
      return {
        ...student,
        grade: updatedGrades[0].grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });
}

export default updateStudentGradeByCity;
