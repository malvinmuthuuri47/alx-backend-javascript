export default function getStudentIdsSum(studentArr) {
  return studentArr.reduce((accumulator, currentStudent) => accumulator + currentStudent.id, 0);
}
