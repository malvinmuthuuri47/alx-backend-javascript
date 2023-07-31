export default function getListStudentIds(studentArr) {
  if (Array.isArray(studentArr)) {
    const ids = studentArr.map((student) => student.id);
    return ids;
  }

  return [];
}
