interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTask(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome = () : string => 'Working from home';
  getCoffeeBreak = () : string => 'Getting a coffee break';
  workTeacherTasks = () : string => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
  workFromHome = () : string => 'Cannot work from home';
  getCoffeeBreak = () : string => 'Cannot have a break';
  workTeacherTasks = () : string => 'Getting to work';
}

export const createEmployee = (salary: number | string): Teacher | Director => {
  return typeof salary === 'number' && salary < 500 ? new Teacher() : new Director();
}

export const isDirector = (employee: Teacher | Director): employee is Director => employee instanceof Director;

export const executeWork = (employee: teacher | Director): void => {
  const result = employee instanceof Teacher? employee.workTeacherTasks() : employee.workDirectorTasks();
    console.log(result)
}

type Subjects = 'Math' | 'history';

export const teacherClass = (todayClass: Subjects): string => todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
