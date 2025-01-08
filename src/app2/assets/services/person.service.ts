import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPersonMain } from '../models/person/IPersonMain';
import { IPersonRace } from '../models/person/IPersonRace';
import { IPersonGenderIdentity } from '../models/person/IPersonGenderIdentity';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
constructor() { }

  personURL: string = 'https://localhost:7236/person/';
  httpClient = inject(HttpClient);

  SendPerson(personToSend: IPersonMain): Observable<any> {
    return this.httpClient.post(this.personURL, personToSend);
  }

  SendPersonRace(personRace: IPersonRace): Observable<any> {
    return this.httpClient.post(this.personURL + 'race', personRace);
  }

  GetExistingPeople(personInfoToSend: IPersonMain): Observable<any> {
    return this.httpClient.post(this.personURL, personInfoToSend);
  }

  SendPersonGenderIdentity(personGenderIdentity: IPersonGenderIdentity): Observable<any> {
    return this.httpClient.post(this.personURL, personGenderIdentity);
  }

  UpdatePerson(personToSend: IPersonMain) : Observable<any> {
    return this.httpClient.patch(this.personURL, personToSend);
  }

  UpdatePersonRace(personRace: IPersonRace): Observable<any> {
    return this.httpClient.patch(this.personURL, personRace);
  }

  UpdatePersonGenderIdentity(personGenderIdentity: IPersonGenderIdentity): Observable<any> {
    return this.httpClient.patch(this.personURL, personGenderIdentity);
  }

  DeletePersonRace(personRaceID: number): Observable<any> {
    return this.httpClient.delete(this.personURL + `/${personRaceID}`);
  }

}
