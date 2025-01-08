import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  output,
  ViewChild,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { IAgency } from '../../../assets/models/IAgency';
import { IAgencyType } from '../../../assets/models/IAgencyType';
import { IState } from '../../../assets/models/IState';
import { IAgencyZRegion } from '../../../assets/models/IAgencyZRegion';
import { IAgencyAssignRegion } from '../../../assets/models/IAgencyAssignRegion';
import { AgencyService } from '../../../assets/services/agency.services';
import { CommonModule } from '@angular/common';
import { AddressComponent } from '../../address/address.component';
import { ITFIAddress } from '../../../assets/models/ITFIAddress';

interface IStatePerRegion {
  Disabled?: boolean;
  State: IState;
  Region: IAgencyZRegion[];
}

@Component({
  selector: 'tfi-agencyform',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    CommonModule,
    AddressComponent,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './agencyform.component.html',
  styleUrl: './agencyform.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgencyformComponent {
  constructor(private fb: FormBuilder, private agencyService: AgencyService) {}

  @ViewChild(AddressComponent) addressComponent!: AddressComponent;
  @Input() isStandAlone: boolean = true;

  isTexas = output<boolean>();

  agencyTypes: IAgencyType[] = [
    { ID: 1, Description: 'State Contractor' },
    { ID: 2, Description: 'Agency Sub Contractor' },
    { ID: 3, Description: 'Residential/Hospitalization' },
    { ID: 4, Description: 'Detention' },
    { ID: 5, Description: 'CPA' },
    { ID: 6, Description: 'SIL' },
    { ID: 7, Description: 'RTC' },
    { ID: 8, Description: 'GRO' },
  ];

  states: IState[] = [
    { ID: 1, Description: 'Kansas' },
    { ID: 2, Description: 'Texas' },
    { ID: 3, Description: 'Oklahoma' },
    { ID: 4, Description: 'Nebraska' },
  ];

  statePerRegionList: IStatePerRegion[] = [
    {
      State: this.states[1],
      Region: [
        { ID: 1, Description: 'TX - Region 1' },
        { ID: 2, Description: 'TX - Region 2' },
        { ID: 3, Description: 'TX - Region 3 (not including 3b)' },
        { ID: 4, Description: 'TX - Region 4' },
      ],
    },
    {
      State: this.states[0],
      Region: [
        { ID: 5, Description: 'KS - Region 1' },
        { ID: 6, Description: 'KS - Region 2' },
        { ID: 7, Description: 'KS - Region 3' },
        { ID: 8, Description: 'KS - Region 4' },
      ],
    },
    {
      State: this.states[2],
      Region: [
        { ID: 9, Description: 'OK - Region 1' },
        { ID: 10, Description: 'OK - Region 2' },
        { ID: 11, Description: 'OK - Region 3' },
        { ID: 12, Description: 'OK - Region 4' },
      ],
    },
  ];

  statePerRegionCopy: IStatePerRegion[] = this.statePerRegionList;

  existingAgency!: IAgency;
  existingAgencyRegion!: IAgencyAssignRegion[];

  agencyFormGroup: FormGroup = this.fb.group({
    agencyName: ['', Validators.required],
    agencyTypeDropDown: ['', Validators.required],
    agencyContact: [''],
    placementContact: [''],
    stateDropDown: ['', Validators.required],
    regionDropDown: ['', Validators.required],
    startDate: ['', Validators.required],
    taxControl: ['', Validators.minLength(9)],
  });

  get agencyName() {
    return this.agencyFormGroup.get('agencyName');
  }

  get agencyTypeDropDown() {
    return this.agencyFormGroup.get('agencyTypeDropDown');
  }

  get agencyContact() {
    return this.agencyFormGroup.get('agencyContact');
  }

  get placementContact() {
    return this.agencyFormGroup.get('placementContact');
  }

  get stateDropDown() {
    return this.agencyFormGroup.get('stateDropDown');
  }

  get regionDropDown() {
    return this.agencyFormGroup.get('regionDropDown');
  }

  get startDate() {
    return this.agencyFormGroup.get('startDate');
  }

  get taxControl() {
    return this.agencyFormGroup.get('taxControl');
  }

  ClearTextBox(control: AbstractControl): void {
    control.setValue('');
  }

  FilterRegionsByState(event?: MatSelectChange, stateID?: number) {
    this.statePerRegionList = this.statePerRegionCopy;
    if (event?.value != undefined) {
      this.statePerRegionList = this.statePerRegionList.filter(
        (region) => region.State.ID === event.value.ID
      );
      this.isTexas.emit(event.value.Description === 'Texas' ? true : false);
    }
    if (stateID != undefined) {
      this.statePerRegionList = this.statePerRegionList.filter(
        (region) => region.State.ID === stateID
      );
      this.isTexas.emit(stateID === 2 ? true : false);
    }
  }

  SaveAgency(recordExists: boolean): number {
    if (this.agencyFormGroup.valid) {
      console.log('Form is valid.');
      const agencyToSend: IAgency = {
        AgencyName: this.agencyName?.value,
        AgencyTypeID: this.agencyTypeDropDown?.value.ID,
        StartDate: this.startDate?.value,
        StateID: this.stateDropDown?.value.ID,
        AgencyContact: this.agencyContact?.value,
        PlacementContact: this.placementContact?.value,
        TaxNumber: this.taxControl?.value,
      };

      if (recordExists) {

        agencyToSend.ID = this.existingAgency.ID;

        // this.agencyService.UpdateAgency(agencyToSend).subscribe();

        console.log('Agency to Update: ', agencyToSend);

        return this.existingAgency.ID ? this.existingAgency.ID : 0;

      } else {

        let agencyIdToReturn: number = 3;
        // this.agencyService.SendAgency(agencyToSend).subscribe({
        //   next: response => {
        //     agencyIdToReturn = response.id;
        //   },
        //   error: err => {
        //     console.log('Error: ', err);
        //   },
        // });

        console.log('Agency to Send: ', agencyToSend);
        return agencyIdToReturn;
      }
    } else {
      console.log('Form is invalid.');
      return 0;
    }
  }

  SaveAgencyRegions(agencyID: number, recordExists: boolean = false): void {
    if (recordExists) {
      if (this.regionDropDown?.value.length >= this.existingAgencyRegion.length) {
        for (let index = 0; index < this.regionDropDown?.value.length; index++) {
          if (this.existingAgencyRegion[index] != undefined) {
            this.existingAgencyRegion[index].RegionID = this.regionDropDown?.value[index].ID;
          } else {
            let regionToPush: IAgencyAssignRegion = {
              AgencyID: agencyID,
              RegionID: this.regionDropDown?.value[index].ID
            };
            this.existingAgencyRegion.push(regionToPush);
          }
        }

        // this.existingAgencyRegion.forEach(region => {
        //   if (region.ID) {
        //     this.agencyService.UpdateAgencyAssignRegion(region).subscribe();
        //   } else {
        //     this.agencyService.SendAgencyAssignRegion(region).subscribe();
        //   }
        // })

        console.log('Agency regions to update: ', this.existingAgency)
      } else {
        const regionIds: number[] = [];
        this.regionDropDown?.value.forEach((region: IAgencyZRegion) => {
            regionIds.push(region.ID)
        });
        const agencyRegionToUpdate: IAgencyAssignRegion[] = this.FindAssignedRegionsByID(regionIds);
        console.log('Regions to update: \n', agencyRegionToUpdate);

        const agencyRegionsToDelete: IAgencyAssignRegion[] = this.FindAssignedRegionsByID(regionIds, true);

        console.log('Regions to delete: \n', agencyRegionsToDelete);

        // agencyRegionToUpdate.forEach(agency => {
        //   this.agencyService.UpdateAgencyAssignRegion(agency).subscribe();
        // })
        // agencyRegionsToDelete.forEach(agency => {
        //   this.agencyService.DeleteAgencyAssignedRegion(agency.ID ? agencyID : 0).subscribe();
        // })
      }
    } else {
      let agencyAssignRegionToSend: IAgencyAssignRegion[] = [];
      this.regionDropDown?.value.forEach((region: IAgencyZRegion) => {
        const agencyAssignRegionToPush: IAgencyAssignRegion = {
          AgencyID: agencyID,
          RegionID: region.ID,
        };
        agencyAssignRegionToSend.push(agencyAssignRegionToPush);
      });
  
      // agencyAssignRegionToSend.forEach(agencyAssign => {
      //   this.agencyService.SendAgencyAssignRegion(agencyAssign).subscribe();
      // });

      console.log('Agency regions to send: ', agencyAssignRegionToSend);
    }

  }

  PrefillAgency(
    agencyToFill: IAgency,
    agencyRegionToFill: IAgencyAssignRegion[]
  ): void {
    if (agencyToFill != undefined) {
      const agencyTypeIndex = this.agencyTypes.findIndex(
        (agencyType) => agencyType.ID == agencyToFill.AgencyTypeID
      );
      const agencyStateIndex = this.states.findIndex(
        (agencyState) => agencyState.ID == agencyToFill.StateID
      );
      this.agencyName?.setValue(agencyToFill.AgencyName);
      this.startDate?.setValue(agencyToFill.StartDate);
      this.agencyTypeDropDown?.setValue(this.agencyTypes[agencyTypeIndex]);
      this.stateDropDown?.setValue(this.states[agencyStateIndex]);
      this.placementContact?.setValue(agencyToFill.PlacementContact);
      this.agencyContact?.setValue(agencyToFill.AgencyContact);
      this.taxControl?.setValue(agencyToFill.TaxNumber);
      this.existingAgency = agencyToFill;
    }
    if (agencyRegionToFill != undefined) {
      this.existingAgencyRegion = agencyRegionToFill;
      const stateIndex: number = this.statePerRegionList.findIndex(
        (statePerRegion) => statePerRegion.State.ID === agencyToFill.StateID
      );
      const regionIdList: number[] = [];
      agencyRegionToFill.forEach((region) => {
        regionIdList.push(region.RegionID);
      });
      this.regionDropDown?.setValue(
        this.FindRegionsByID(regionIdList, stateIndex)
      );
      this.FilterRegionsByState(undefined, agencyToFill.StateID);
    }
  }
  PreFillAddress(address:ITFIAddress){
    this.addressComponent.PreFillAddress(address);
  }
  FindRegionsByID(listOfIds: number[], stateIndex: number): IAgencyZRegion[] {
    return this.statePerRegionList[stateIndex].Region.filter((region) =>
      listOfIds.includes(region.ID)
    );
  }

  FindAssignedRegionsByID(listOfIds: number[], findByExcludingIDs: boolean = false): IAgencyAssignRegion[] {
    if (findByExcludingIDs) {
      return this.existingAgencyRegion.filter((region) =>
        !listOfIds.includes(region.RegionID)
      );
    } else {
      return this.existingAgencyRegion.filter((region) =>
        listOfIds.includes(region.RegionID)
      );
    }
  }

  MockAddress(): void {
    const addressJson: string = JSON.stringify(this.addressComponent.address);
    sessionStorage.setItem('address', addressJson);
  }
}
