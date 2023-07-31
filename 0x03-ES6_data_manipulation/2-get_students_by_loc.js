export default function getStudentsByLocation(studentArr, city) {
  if (studentArr instanceof Array && typeof city === 'string') {
    return studentArr.filter((student) => student.location === city);
  }

  return [];
}
