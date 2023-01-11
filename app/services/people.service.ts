import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class PeopleService {

  constructor(private fs: FirebaseService) { }

  getPeople(): Observable<any> {
    return this.fs.getList('people')
      .valueChanges()
      .map((people) => {
        let personsArray = [];
        // console.log('People List in People Service:', people);
        people.forEach((person: any) => {
          // console.log('Person inside forEach: ', person);
          let p = {
            fname: person.fname,
            lname: person.lname,
            email: person.email,
            message: 'This person has been mapped!!'
          };
          personsArray.push(p);
        })
        return personsArray;
      })
  }
}