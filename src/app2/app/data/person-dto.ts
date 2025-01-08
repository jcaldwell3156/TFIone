import { Injectable } from '@angular/core';
import { IPersonMain } from '../../assets/models/person/IPersonMain';
import { IPersonGenderIdentity } from '../../assets/models/person/IPersonGenderIdentity';
import { IPersonRace } from '../../assets/models/person/IPersonRace';

@Injectable({ providedIn: 'root' })
export class PersonDTO {
  listofPeople: IPersonMain[] = [
    {
      ID: 1,
      FirstName: 'Chun',
      LastName: 'Li',
      GenderID: 2,
      PreferredName: 'Chun Li',
      SSN: 123456789,
      Honorific: 'Ms.',
      Prefix: 2,
      DateOfBirth: new Date('12/3/1981'),
    },
    {
      ID: 2,
      FirstName: 'Terry',
      LastName: 'Bogard',
      GenderID: 1,
      PreferredName: 'Terry Bogard',
      SSN: 123456789,
      Honorific: 'Mr.',
      DateOfBirth: new Date('4/29/1990'),
    },
    {
      ID: 3,
      FirstName: 'William',
      MiddleName: 'F.',
      LastName: 'Guile',
      GenderID: 1,
      PreferredName: 'Guile',
      SSN: 123456789,
      Honorific: 'Mr.',
      DateOfBirth: new Date('9/21/1979'),
    },
    {
      ID: 4,
      FirstName: 'Cammy',
      LastName: 'White',
      GenderID: 2,
      PreferredName: 'Cammy',
      SSN: 123456789,
      Honorific: 'Ms.',
      DateOfBirth: new Date('12/29/1991'),
    },
    {
      ID: 5,
      FirstName: 'Ken',
      LastName: 'Masters',
      GenderID: 1,
      PreferredName: 'Ken',
      SSN: 123456789,
      Honorific: 'Mr.',
      DateOfBirth: new Date('8/17/1987'),
    },
  ];

  personGenderIdentities: IPersonGenderIdentity[] = [
    {
      ID: 1,
      PersonID: 1,
      SabID: 2,
      PronounID: 2,
    },
    {
      ID: 2,
      PersonID: 2,
      SabID: 1,
      PronounID: 1,
    },
    {
      ID: 3,
      PersonID: 3,
      SabID: 1,
      PronounID: 3,
    },
    {
      ID: 4,
      PersonID: 4,
      SabID: 3,
      PronounID: 4,
    },
    {
      ID: 5,
      PersonID: 5,
      SabID: 3,
      PronounID: 1,
    },
  ];

  personRaceList: IPersonRace[] = [
    {
      ID: 1,
      PersonID: 1,
      RaceID: 1,
    },
    {
      ID: 2,
      PersonID: 1,
      RaceID: 2,
    },
    {
      ID: 3,
      PersonID: 1,
      RaceID: 3,
    },
    {
      ID: 4,
      PersonID: 1,
      RaceID: 4,
    },
    {
      ID: 5,
      PersonID: 2,
      RaceID: 10,
    },
    { 
      ID: 6, 
      PersonID: 2, 
      RaceID: 11 
    },
    { 
      ID: 7, 
      PersonID: 2, 
      RaceID: 12 
    },
    { 
      ID: 8, 
      PersonID: 2, 
      RaceID: 13 
    },
  ];

  GetPersonByID(personId: number): IPersonMain | undefined {
    const personToSend: IPersonMain | undefined = this.listofPeople.find(
      (person) => person.ID == personId
    );
    return personToSend;
  }

  GetPersonGenderIdentityByID(
    personId: number
  ): IPersonGenderIdentity | undefined {
    const genderIdentityToSend: IPersonGenderIdentity | undefined =
      this.personGenderIdentities.find(
        (genderID) => genderID.PersonID == personId
      );
    return genderIdentityToSend;
  }

  GetPersonRaceByID(personId: number): IPersonRace[] {
    const personRaceListToSend: IPersonRace[] = this.personRaceList.filter(
      (personRace) => personRace.PersonID == personId
    );
    return personRaceListToSend;
  }
}
