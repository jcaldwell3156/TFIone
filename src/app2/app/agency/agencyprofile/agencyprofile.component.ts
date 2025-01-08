import { AfterViewChecked, AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { AgencyformComponent } from '../agencyform/agencyform.component';
import { StaffAdditionComponent } from '../staff-addition/staff-addition.component';
import { ThirdPartyComponent } from '../../_common/third-party/third-party.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ITFIAddress } from '../../../assets/models/ITFIAddress';
import { AgencyDTO } from '../../data/agency-dto';
import { IAgencyView } from '../../../assets/models/IAgencyView';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ErrorMessageComponent } from '../../_common/error-message/error-message.component';


@Component({
  selector: 'app-agencyprofile',
  standalone: true,
  imports: [
    MatButton,
    MatTabsModule,
    AgencyformComponent,
    StaffAdditionComponent,
    ThirdPartyComponent,
    ReactiveFormsModule,
    CommonModule,
    ErrorMessageComponent,
  ],
  providers: [AgencyDTO],
  templateUrl: './agencyprofile.component.html',
  styleUrl: './agencyprofile.component.scss',
})
export class AgencyprofileComponent implements AfterViewInit {
  constructor(
    private fb: FormBuilder,
    private agencyDto: AgencyDTO,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  agencyName: string = 'A World for Children';
  addressShowcase: ITFIAddress = {
    Street1: '2007 Sam Bass Rd,',
    Street2: 'Suite 200',
    City: 'Round Rock',
    State: 'TX',
    ZipCode: '78681',
    County: 'Cowley',
  };
  isTexasAgency: boolean = true;
  isNewAgency: boolean = true;

  hideTexasControls: boolean = true;

  agencyFromService!: IAgencyView | null;

  private _snackBar = inject(MatSnackBar);

  blank: string = '?';
  agencyProfileFormGroup: FormGroup = this.fb.group({});
  agencyID: number = 0;
  @ViewChild(AgencyformComponent) agencyForm!: AgencyformComponent;
  @ViewChild(StaffAdditionComponent)
  staffAdditionComponent!: StaffAdditionComponent;
  @ViewChild(ThirdPartyComponent) thirdPartyComponent!: ThirdPartyComponent;

  ngAfterViewInit(): void {
    this.agencyID = parseInt(this.route.snapshot.params['id'], 10);

    if (this.agencyID > 0) {
      this.PrefillAgency(this.agencyID);
      this.PrefillThirdPartyLinks();
      this.isNewAgency = false;
    } else {
      this.isNewAgency = true;
    }
  }

  HideTexasControls(isTexasAgency: boolean): void {
    this.hideTexasControls = !isTexasAgency;
  }

  SaveAgency(recordExists: boolean): void {
    if (this.agencyForm.agencyFormGroup.valid) {
      const agencyID: number = this.agencyForm.SaveAgency(recordExists);

      if (agencyID > 0) {
        this.agencyForm.SaveAgencyRegions(agencyID, recordExists);
        this.agencyForm.MockAddress();
        if (this.agencyProfileFormGroup.valid) {
          this.staffAdditionComponent.SaveStaffAgencyList(
            agencyID,
            recordExists
          );
        }

        if (this.thirdPartyComponent) {
          this.thirdPartyComponent.SaveThirdPartyService(
            agencyID,
            recordExists
          );
        }
        this._snackBar.open('Saved changes', 'Close');
      } else {
        this._snackBar.open('Something went wrong with saving agency', 'Close');
      }
    } else {
      this._snackBar.open('Please fill in required fields.', 'Close');
    }
  }

  PrefillAgency(agencyID: number): void {
    this.agencyFromService = this.agencyDto.FindAllAgencyDataByID(agencyID);
    if (this.agencyFromService != null) {
      this.agencyForm.PrefillAgency(
        this.agencyFromService.Agency,
        this.agencyFromService.AgencyRegion
      );
      this.agencyName = this.agencyFromService.Agency.AgencyName;
      this.staffAdditionComponent.PrefillPeopleOfNote(
        this.agencyFromService.AgencyPeopleOfNote
      );
      this.agencyForm.addressComponent.exisitngAddress =
        this.agencyFromService.AgencyAddress;
      this.agencyForm.PreFillAddress(this.agencyFromService.AgencyAddress);
      this.addressShowcase = this.agencyFromService.AgencyAddress;
    } else {
      console.log('Could not find agency with ID', agencyID);
      this.router.navigateByUrl('/notfound');
    }
  }

  PrefillThirdPartyLinks(): void {
    setTimeout(() => {
      if (this.agencyFromService?.AgencyThirdPartyLink != undefined && this.thirdPartyComponent) {
        this.thirdPartyComponent.PrefillThirdParty(this.agencyFromService.AgencyThirdPartyLink);
        this.isTexasAgency = true;
      } else {
        this.isTexasAgency = false;
      }
    }, 100);
  }
}
