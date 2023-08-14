/// < reference path="Teacher.ts" />
/// <reference path="Subjects.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject{

    getRequirements = () => 'Here is the list of requirments for Cpp';

    getAvailableTeacher = () => {
      if (!this.teacher?.experienceTeachingC) return 'No avaialable teacher';

      return `Available Teacher: ${this.teacher}`;
    }
  }
}
