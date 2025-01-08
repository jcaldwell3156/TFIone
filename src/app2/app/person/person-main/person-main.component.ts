import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PersonService } from '../../../assets/services/person.service';
import { IPersonMain } from '../../../assets/models/person/IPersonMain';
import { PersonRaceComponent } from '../person-race/person-race.component';
import { PersonExistingComponent } from '../person-existing/person-existing.component';
import { MatButtonModule } from '@angular/material/button';
import { SpinnerComponent } from '../../_common/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IGender } from '../../../assets/models/IGender';
import { ISab } from '../../../assets/models/ISab';
import { IPronoun } from '../../../assets/models/IPronoun';
import { IPrefix } from '../../../assets/models/IPrefix';
import { IPersonGenderIdentity } from '../../../assets/models/person/IPersonGenderIdentity';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonDTO } from '../../data/person-dto';
import { IPersonRace } from '../../../assets/models/person/IPersonRace';

@Component({
  selector: 'tfi-person-main',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    CommonModule,
    PersonRaceComponent,
    PersonExistingComponent,
    SpinnerComponent,
  ],
  providers: [provideNativeDateAdapter(), PersonService, FormBuilder, PersonDTO],
  templateUrl: './person-main.component.html',
  styleUrl: './person-main.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PersonMainComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.personId = parseInt(this.activatedRoute.snapshot.params['id'], 10);
    if (this.personId > 0) {
      console.log('Person ID: \n', this.personId);
      const persontoFill: IPersonMain | undefined = this.personDTO.GetPersonByID(this.personId);
      const genderIdToFill: IPersonGenderIdentity | undefined = this.personDTO.GetPersonGenderIdentityByID(this.personId);
      if (persontoFill && genderIdToFill) {
        this.PrefillPersonForm(persontoFill, genderIdToFill);
      } else {
        console.log('Could not find person');
        this.router.navigateByUrl('/notfound');
      }
    } 
  }


  @ViewChild(PersonExistingComponent)
  personExistingComponent!: PersonExistingComponent;
  @ViewChild(PersonRaceComponent)
  personRaceComponent!: PersonRaceComponent;

  genders: IGender[] = [
    { ID: 1, Description: 'Male' },
    { ID: 2, Description: 'Female' },
    { ID: 3, Description: 'Nonbinary' },
    { ID: 4, Description: 'Genderqueer' },
    { ID: 5, Description: 'Genderfluid' },
    { ID: 6, Description: 'Two-Spirit' },
    { ID: 7, Description: 'Other' },
  ];
  prefixes: IPrefix[] = [
    { ID: 1, Description: 'Mr.' },
    { ID: 2, Description: 'Mrs.' },
    { ID: 3, Description: 'Ms.' },
    { ID: 4, Description: 'Mx.' },
  ];
  sexAssignments: ISab[] = [
    { ID: 1, Description: 'Male' },
    { ID: 2, Description: 'Female' },
    { ID: 3, Description: 'Intersex' },
  ];
  pronouns: IPronoun[] = [
    { ID: 1, Description: 'He/Him/His' },
    { ID: 2, Description: 'She/Her/Hers' },
    { ID: 3, Description: 'They/Them/Theirs' },
    { ID: 4, Description: 'Other' },
  ];

  personId!: number
  personMain!: IPersonMain;

  checkExisting: boolean = false;
  isLoading: boolean = false;

  fb = inject(FormBuilder);
  personService = inject(PersonService);
  private _snackBar = inject(MatSnackBar);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  personDTO: PersonDTO = inject(PersonDTO);

  personFormGroup: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    middleName: [''],
    preferredName: [''],
    ssn: [],
    dateOfBirth: [],
    prefix: [''],
    honorific: [''],
    lastName: ['', Validators.required],
    genderDropDown: ['', Validators.required],
    sexAssignmentDropDown: ['', Validators.required],
    pronounDropDown: ['', Validators.required],
  });

  get firstName() {
    return this.personFormGroup.get('firstName');
  }
  get middleName() {
    return this.personFormGroup.get('middleName');
  }
  get preferredName() {
    return this.personFormGroup.get('preferredName');
  }
  get ssn() {
    return this.personFormGroup.get('ssn');
  }
  get dateOfBirth() {
    return this.personFormGroup.get('dateOfBirth');
  }
  get prefix() {
    return this.personFormGroup.get('prefix');
  }
  get honorific() {
    return this.personFormGroup.get('honorific');
  }
  get lastName() {
    return this.personFormGroup.get('lastName');
  }
  get genderDropDown() {
    return this.personFormGroup.get('genderDropDown');
  }
  get sexAssignmentDropDown() {
    return this.personFormGroup.get('sexAssignmentDropDown');
  }
  get pronounDropDown() {
    return this.personFormGroup.get('pronounDropDown');
  }

  FillInPersonModel(): void {
    this.personMain = {
      ID: this.personId ? this.personId : undefined,
      FirstName: this.firstName?.value ? this.firstName.value : '',
      MiddleName: this.middleName?.value ? this.middleName.value : undefined,
      LastName: this.lastName?.value ? this.lastName.value : '',
      PreferredName: this.preferredName?.value
        ? this.preferredName.value
        : undefined,
      SSN: this.ssn?.value ? parseInt(this.ssn.value) : undefined,
      DateOfBirth: this.dateOfBirth?.value
        ? new Date(this.dateOfBirth.value)
        : undefined,
      GenderID: this.genderDropDown?.value
        ? parseInt(this.genderDropDown.value.ID)
        : 0,
      Honorific: this.honorific?.value ? this.honorific.value : undefined,
      Prefix: this.prefix?.value ? parseInt(this.prefix.value.ID) : undefined,
    };
  }

  SaveNewPerson(recordExists: boolean): void {
    this.isLoading = true;
    if (this.personFormGroup.valid) {
      this.FillInPersonModel();
      const personGenderIdentity: IPersonGenderIdentity = {
        SabID: this.sexAssignmentDropDown?.value ? this.sexAssignmentDropDown.value.ID : 0,
        PersonID: recordExists ? this.personId : 0,
        PronounID: this.pronounDropDown?.value ? this.pronounDropDown.value.ID : 0
      }
      setTimeout(() => {
        this.isLoading = false;
        console.log('Person data: \n', this.personMain);
        console.log('Person Gender data: \n', personGenderIdentity);
        if (recordExists) {
          this.personRaceComponent.SavePersonRace(this.personId, true);
          // this.personService.UpdatePerson(this.personMain).subscribe();
          // this.personService.UpdatePersonGenderIdentity(personGenderIdentity).subscribe();
          this._snackBar.open('Edited Person', 'Close');
        } else {
          this.personRaceComponent.SavePersonRace(0);
          // this.personService.SendPerson(this.personMain).subscribe();
          // this.personService.SendPersonGenderIdentity(personGenderIdentity).subscribe();
          this._snackBar.open('Saved new person.', 'Close');
        }
      }, 1000);
    } else {
      this.isLoading = false;
      this._snackBar.open('Please fill in required fields.', 'Close');
    }
  }

  GetExistingPeople(): void {
    if (this.personFormGroup.valid) {
      this.FillInPersonModel();
      this.checkExisting = true;
      setTimeout(() => {
        this.personExistingComponent.FetchExistingPeople(this.personMain);
      }, 100);
    } else {
      this._snackBar.open('Please fill in required fields.', 'Close');
    }
  }

  CloseExistingTable(showExistingTable: boolean): void {
    this.checkExisting = showExistingTable;
  }

  GetAndFillAllPersonControls(personMain: IPersonMain) : void {
    if (personMain.ID) {
      this.personId = personMain.ID;
      this.personMain = personMain;
      console.log('Person ID: ', this.personId, ' Person Main:\n', this.personMain);
      const personGenderId: IPersonGenderIdentity | undefined = this.personDTO.GetPersonGenderIdentityByID(personMain.ID);
      if (personGenderId) {
        this.PrefillPersonForm(personMain, personGenderId);
      }
      const personRaceToSend: IPersonRace[] = this.personDTO.GetPersonRaceByID(personMain.ID);
      if (personRaceToSend) {
        this.personRaceComponent.PrefillPersonRace(personRaceToSend);
      }
    }
  }

  PrefillPersonForm(persontoFill: IPersonMain, genderIdToFill: IPersonGenderIdentity): void {
      const genderIndex = this.genders.findIndex(gender => gender.ID == persontoFill.GenderID);
      const prefixIndex = this.prefixes.findIndex(prefix => prefix.ID == persontoFill.Prefix);
      this.firstName?.setValue(persontoFill.FirstName);
      this.middleName?.setValue(persontoFill.MiddleName);
      this.lastName?.setValue(persontoFill.LastName);
      this.preferredName?.setValue(persontoFill.PreferredName);
      this.ssn?.setValue(persontoFill.SSN);
      this.dateOfBirth?.setValue(persontoFill.DateOfBirth);
      this.genderDropDown?.setValue(this.genders[genderIndex]);
      this.honorific?.setValue(persontoFill.Honorific);
      this.prefix?.setValue(this.prefixes[prefixIndex]);

      const sabIndex = this.sexAssignments.findIndex(sab => sab.ID == genderIdToFill.SabID);
      const pronounIndex = this.pronouns.findIndex(pronoun => pronoun.ID == genderIdToFill.PronounID);
      this.sexAssignmentDropDown?.setValue(this.sexAssignments[sabIndex]);
      this.pronounDropDown?.setValue(this.pronouns[pronounIndex]);
  }
}
