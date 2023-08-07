export default function createEmployeesObject(employeesList) {
  const allEmployees = {
    ...employeesList,
  };

  const reportObject = {
    allEmployees,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };

  return reportObject;
}
