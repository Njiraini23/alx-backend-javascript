export default function getStudentIdSum(arrOfStudents) {
  const initialValue = 0;
  const sumId = arrOfStudents.reduce(
    (sum, student) => sum + student.id, initialValue,
  );
  return sumId;
}
