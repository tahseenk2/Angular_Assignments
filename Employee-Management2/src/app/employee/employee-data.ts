import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee';


export class EmployeeData implements InMemoryDbService {

  createDb() {
    const employees: Employee[] = [
      {
        id: 1,
        firstname: 'Tahseen',
        lastname:'Khan',
        email:'tk@com',
        cno:9898989898,
        address:'Vadodara',
        username:'tahseenk',
        password:'tahseenk',
        gender:'Female',
        qualification: 'UG',
        experience: '0yr',
        languages: ['C', 'C++']
      },
      {
        id: 2,
        firstname: 'Anas',
        lastname:'Mistry',
        email:'am@com',
        cno:9898989898,
        address:'Vadodara',
        username:'anasmistry',
        password:'anasmistry',
        gender:'Male',
        qualification: 'UG',
        experience: '0yr',
        languages:  ['C']
      },
      {
        id: 3,
       firstname: 'Jay',
       lastname:'Patel',
        email:'jp@com',
        cno:9898989898,
        address:'Vadodara',
        username:'jaypatel',
        password:'jaypatel',
        gender:'Male',
        qualification: 'UG',
        experience: '0yr',
        languages: ['C','C++']
       },
    ];
    return { employees };
  }
}
