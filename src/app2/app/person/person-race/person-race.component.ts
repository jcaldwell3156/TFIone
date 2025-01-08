import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatOptionModule,
} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PersonService } from '../../../assets/services/person.service';
import { MatSelectModule } from '@angular/material/select';
import { IRace } from '../../../assets/models/IRace';
import { IPersonRace } from '../../../assets/models/person/IPersonRace';

@Component({
  selector: 'tfi-person-race',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
  ],
  templateUrl: './person-race.component.html',
  styleUrl: './person-race.component.scss',
})
export class PersonRaceComponent implements OnInit {
  personService = inject(PersonService);
  @Input({ required: true }) parentFormGroup!: FormGroup;
  ngOnInit(): void {
    if (this.parentFormGroup) {
      this.parentFormGroup.addControl('raceDropDown', this.raceDropDown);
    }
  }

  existingPersonRace!: IPersonRace[];

  races: IRace[] = [
    { ID: 1, Description: 'Caucasian' },
    { ID: 2, Description: 'African American' },
    { ID: 3, Description: 'Chinese' },
    { ID: 4, Description: 'Japanese' },
    { ID: 5, Description: 'Hispanic' },
    { ID: 6, Description: 'Native American' },
    { ID: 7, Description: 'Vietnamese' },
    { ID: 8, Description: 'Asian' },
    { ID: 9, Description: 'Bi-Racial' },
    { ID: 10, Description: 'Eastern Indian' },
    { ID: 11, Description: 'Pacific Islander' },
    { ID: 12, Description: 'Middle Eastern' },
    { ID: 13, Description: 'Puerto Rican' },
    { ID: 14, Description: 'Other' },
    { ID: 15, Description: 'Unable To Determine' },
    { ID: 16, Description: 'Prefer Not To Say' },
  ];

  raceDropDown = new FormControl();

  SavePersonRace(personID: number, recordExists: boolean = false): void {
    if (recordExists) {
      if (this.raceDropDown?.value.length >= this.existingPersonRace.length){
        for (let index =0; index < this.raceDropDown?.value.length; index++){
          if (this.existingPersonRace[index] != undefined) {
            this.existingPersonRace[index].RaceID = this.raceDropDown?.value[index].ID;
          } else {
            let personRaceToPush: IPersonRace = {
              PersonID: personID,
              RaceID: this.raceDropDown?.value[index].ID
            };
            this.existingPersonRace.push(personRaceToPush);
          }
        }
        // this.existingPersonRace.forEach(personRace => {
        //   if (personRace.ID) {
        //     this.personService.UpdatePersonRace(personRace).subscribe();
        //   } else {
        //     this.personService.SendPersonRace(personRace).subscribe();
        //   }
        // });
        console.log('Person Race to update \n:', this.existingPersonRace);
      } else {
        const raceIds: number[] = [];
  
        this.raceDropDown?.value.forEach((race: IRace) => {
          raceIds.push(race.ID)
        });
  
        const personRaceToUpdate: IPersonRace[] = this.FetchExistingPersonRaceByID(raceIds)
        console.log('Person Race to update: \n', personRaceToUpdate);
  
        const personRaceToDelete: IPersonRace[] = this.FetchExistingPersonRaceByID(raceIds, true);
        console.log('Person Race to delete: \n', personRaceToDelete);
  
        // personRaceToUpdate.forEach(personRace => {
        //   this.personService.UpdatePersonRace(personRace).subscribe();
        // });
  
        // personRaceToDelete.forEach(personRace => {
        //   this.personService.DeletePersonRace(personRace.ID ? personRace.ID : 0);
        // })
      }
    } else {
      const personRaceToSend: IPersonRace[] = [];
      if (this.raceDropDown.value != null) {
        this.raceDropDown.value.forEach((race: IRace) => {
          const personRaceToPush: IPersonRace = {
            PersonID: personID,
            RaceID: race.ID ? race.ID : 0,
          };
          personRaceToSend.push(personRaceToPush);
        });
  
        // personRaceToSend.forEach((personRace: IPersonRace) => {
        //   this.personService.SendPersonRace(personRace).subscribe();
        // });
        console.log(personRaceToSend);
      }
    }
  }

  PrefillPersonRace(personRaceToFill: IPersonRace[]): void {
    this.existingPersonRace = personRaceToFill;
    const raceIdList: number[] = [];
    personRaceToFill.forEach(personRace => {
      raceIdList.push(personRace.RaceID);
    })
    this.raceDropDown?.setValue(this.FetchRacesByID(raceIdList));
  }

  FetchRacesByID(listOfIds: number[]) : IRace[] {
    const raceToReturn: IRace[] = [];
    this.races.forEach(race => {
      if (listOfIds.includes(race.ID)) {
        raceToReturn.push(race);
      }
    })
    return raceToReturn;
  }

  FetchExistingPersonRaceByID(listOfIds: number[], findByExcludingIDs: boolean = false): IPersonRace[] {
    const raceToReturn: IPersonRace[] = [];
    if (findByExcludingIDs) {
      this.existingPersonRace.forEach(personRace => {
        if (listOfIds.includes(personRace.RaceID)) {
          raceToReturn.push(personRace);
        }
      });
    } else {
      this.existingPersonRace.forEach(personRace => {
        if (!listOfIds.includes(personRace.RaceID)) {
          raceToReturn.push(personRace);
        }
      });
    }
    return raceToReturn;
  }
}
