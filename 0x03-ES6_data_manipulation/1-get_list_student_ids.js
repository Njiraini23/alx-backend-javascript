export default function getListStudent(studentsArray) {
  if (Array.isArray(studentsArray) === false) {
    return [];
  }
  return studentsArray.map((studentItem) => studentItem.id);
}
