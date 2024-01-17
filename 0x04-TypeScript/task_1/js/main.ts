// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow additional attributes
}

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define the printTeacher function
const printTeacher = (firstName:string, lastName:string) : string => {
  `${firstName.charAt(0)}. ${lastName}`;
};

// Define the printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the interface for the constructor
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Define the interface for the class
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
class Student implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework = (): string => 'Currently working';

  displayName = (): string => this.firstName;
}
