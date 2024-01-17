interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome = (): string => 'Working from home';
  getCoffeeBreak = () : string => 'Getting a coffee break';
  workDirectorTasks = (): string => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
  workFromHome = (): string => 'Cannot work from home';
  getCoffeeBreak = (): string => 'Cannot have a break';
  workTeacherTasks = (): string => 'Getting to work';
}

export function createEmployee(salary: number | string): Teacher | Director {
  if (typeof(salary) === 'number' && salary < 500) {
    return new Teacher;
  }
  return new Director;
}

export const isDirector = (employee: Teacher | Director): boolean => {
  employee instanceof Director;
};

export const executeWork = (employee: Teacher | Director): void => {
  if (employee instanceof Director) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
};

type Subjects = 'Math' | 'History';

export const teachClass = (todayClass: Subjects) : string => {
  return todayClass === 'Math' ? 'Teaching Math': 'Teaching History';
}
