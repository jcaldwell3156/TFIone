import { Component, Input, input, OnInit, output, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AsyncPipe, CommonModule } from '@angular/common';
import { map, Observable, startWith } from 'rxjs';
import { IStaffManagementStaff } from '../../../assets/models/IStaffManagementStaff';
import { AgencyService } from '../../../assets/services/agency.services';
import { IAgencyPersonOfNote } from '../../../assets/models/IAgencyPersonOfNote';

@Component({
  selector: 'app-staff-card',
  standalone: true,
  imports: [
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  CommonModule,
  ],
  templateUrl: './staff-card.component.html'
})
export class StaffCardComponent {
  @Input() staffAdded!: IStaffManagementStaff;

  showID = output<number>()

  SendBackStaffID(): void {
    this.showID.emit(this.staffAdded.ID);
  }
}

@Component({
  selector: 'tfi-staff-addition',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    AsyncPipe,
    StaffCardComponent,
  ],
  templateUrl: './staff-addition.component.html',
  styleUrl: './staff-addition.component.scss',
})
export class StaffAdditionComponent implements OnInit {
  constructor(private agencyService: AgencyService) {}

  staffControl: FormControl = new FormControl('');

  @Input() staffList: IStaffManagementStaff[] = [
    {
      ID: 1,
      FirstName: 'Faisal',
      MiddleName: '',
      LastName: 'Alabdulkareem',
      EmailAddress: 'faisal@email.com',
      IsActive: true,
      PreferredName: '',
    },
    {
      ID: 2,
      FirstName: 'Detrick',
      MiddleName: '',
      LastName: 'DeBurr',
      EmailAddress: 'detrick@email.com',
      IsActive: true,
      PreferredName: '',
    },
    {
      ID: 3,
      FirstName: 'Stephen',
      MiddleName: '',
      LastName: 'Miller',
      EmailAddress: 'stephen@email.com',
      IsActive: true,
      PreferredName: '',
    },
    {
      ID: 4,
      FirstName: 'Jared',
      MiddleName: '',
      LastName: 'Belardo',
      EmailAddress: 'jared@email.com',
      IsActive: true,
      PreferredName: '',
    },
    {
      ID: 5,
      FirstName: 'John',
      MiddleName: '',
      LastName: 'Caldwell',
      EmailAddress: 'john@email.com',
      IsActive: true,
      PreferredName: '',
    },
  ];

  @Input({ required: true }) parentFormGroup!: FormGroup;

  filteredStaff!: Observable<IStaffManagementStaff[]>;

  staffAdded: IStaffManagementStaff[] = [];

  staffAlreadyAdded: Boolean = false;

  existingAgencyPerson!: IAgencyPersonOfNote[];

  ngOnInit() {
    this.filteredStaff = this.staffControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.FirstName;
        return name ? this._filter(name as string) : this.staffList.slice();
      })
    );
    this.parentFormGroup.addControl('addstaffcontrol', this.staffControl);
  }

  displayFn(user: IStaffManagementStaff): string {
    return user && user.FirstName + ' ' + user.LastName
      ? user.FirstName + ' ' + user.LastName
      : '';
  }

  AddStaff(): void {
    if (this.staffControl.value != '') {
      const staffToAdd: IStaffManagementStaff = this.staffControl.value;
      if (!this.CheckIfStaffExists(staffToAdd.ID)) {
        this.staffAdded.push(staffToAdd);
      }
    }
    this.staffControl.setValue('');
  }

  RemoveStaff(staffID: number): void {
    const staffToDelete: number = this.staffAdded.findIndex(
      (staff) => staff.ID === staffID
    );
    if (staffToDelete != -1) {
      this.staffAdded.splice(staffToDelete, 1);
    }
  }

  CheckIfStaffExists(staffIdToCompare: number): boolean {
    const staffIndexToCheck: number = this.staffAdded.findIndex(
      (staff) => staff.ID === staffIdToCompare
    );

    if (staffIndexToCheck != -1) {
      this.staffAlreadyAdded = true;
      console.log('STAFF EXISTS!', this.staffAlreadyAdded);
      return true;
    } else {
      this.staffAlreadyAdded = false;
      return false;
    }
  }

  SaveStaffAgencyList(agencyID: number, recordExists: boolean = false): void {
    let agencyPeopleOfNoteToSend: IAgencyPersonOfNote[] = [];

    if (recordExists) {
      const staffIds: number[] = [];

      if (this.staffAdded.length >= this.existingAgencyPerson.length) {
        for (let index = 0; index < this.staffAdded.length; index++) {
          if (this.existingAgencyPerson[index] != undefined) {
            this.existingAgencyPerson[index].StaffID =
              this.staffAdded[index].ID;
          } else {
            let agencyPersonToPush: IAgencyPersonOfNote = {
              AgencyID: agencyID,
              StaffID: this.staffAdded[index].ID,
              AssignReason: 0,
            };
            this.existingAgencyPerson.push(agencyPersonToPush);
          }
        }
        this.existingAgencyPerson.forEach((staff) => {
          if (staff.ID != undefined) {
            // this.agencyService.UpdatePersonOfNote(staff).subscribe();
          } else {
            // this.agencyService.SendPersonOfNote(staff).subscribe();
          }
        });
        console.log('Person of note to update: ', this.existingAgencyPerson);
      } else {
        const staffIds: number[] = [];
        this.staffAdded.forEach((staff) => {
          staffIds.push(staff.ID);
        });

        const agencyPersonToUpdate: IAgencyPersonOfNote[] =
          this.FindExistingStaffByID(staffIds, false);
        const agencyPersonToDelete: IAgencyPersonOfNote[] =
          this.FindExistingStaffByID(staffIds, true);

        console.log('Person of note to update: ', agencyPersonToUpdate);
        console.log('Person of note to delete: ', agencyPersonToDelete);

        agencyPersonToUpdate.forEach((staff) => {
          // this.agencyService.UpdatePersonOfNote(staff).subscribe();
        });

        agencyPersonToDelete.forEach((staff) => {
          // this.agencyService.DeletePersonOfNote(staff.ID ? staff.ID : 0)
        });
      }
    } else {
      this.staffAdded.forEach((staff) => {
        const personOfNoteToPush: IAgencyPersonOfNote = {
          AgencyID: agencyID,
          StaffID: staff.ID,
          AssignReason: 1,
        };
        agencyPeopleOfNoteToSend.push(personOfNoteToPush);
      });
      //this.agencyService.SendListOfStaffForAgency(staffAgencyListToSend).subscribe(); Will bring back once IT Fixes servers
      console.log('Person of note to send: ', agencyPeopleOfNoteToSend);
    }
  }

  private _filter(name: string): IStaffManagementStaff[] {
    const filterValue = name.toLowerCase();

    return this.staffList.filter((staff) =>
      staff.FirstName.toLowerCase().includes(filterValue)
    );
  }

  FindStaffListByID(listOfIds: number[]): IStaffManagementStaff[] {
    return this.staffList.filter((staff) => listOfIds.includes(staff.ID));
  }

  FindExistingStaffByID(
    listOfIds: number[],
    findByExcludingIDs: boolean = false
  ): IAgencyPersonOfNote[] {
    if (findByExcludingIDs) {
      return this.existingAgencyPerson.filter(
        (staff) => !listOfIds.includes(staff.StaffID)
      );
    } else {
      return this.existingAgencyPerson.filter((staff) =>
        listOfIds.includes(staff.StaffID)
      );
    }
  }

  PrefillPeopleOfNote(staffToFill: IAgencyPersonOfNote[]): void {
    this.existingAgencyPerson = staffToFill;
    const staffIdList: number[] = [];
    staffToFill.forEach((staff) => {
      staffIdList.push(staff.StaffID);
    });
    this.staffAdded = this.FindStaffListByID(staffIdList);
  }
}
