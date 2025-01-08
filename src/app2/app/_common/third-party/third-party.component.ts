import { ChangeDetectionStrategy, Component, Input, OnInit, signal } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NumbersOnlyDirective } from '../directives/numbers-only.directive';
import { IAgencyLinkThirdPartyService } from '../../../assets/models/IAgencyLinkThirdPartyService';
import { AgencyService } from '../../../assets/services/agency.services';

@Component({
  selector: 'tfi-third-party',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    NumbersOnlyDirective,
  ],
  templateUrl: './third-party.component.html',
  styleUrl: './third-party.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdPartyComponent implements OnInit {
  constructor(private agencyService: AgencyService){}
  @Input({ required: true }) parentFormGroup!: FormGroup;

  existingThirdPartyServices!: IAgencyLinkThirdPartyService;

  texasRIDControl = new FormControl('', [Validators.minLength(8)]);
  texasVIDControl = new FormControl('',);
  ecapAgencyIDControl = new FormControl('');

  protected readonly value = signal('');

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }

  ngOnInit(): void {
    this.parentFormGroup.addControl('TexasRIDControl', this.texasRIDControl);
    this.parentFormGroup.addControl('texasVIDControl', this.texasVIDControl);
    this.parentFormGroup.addControl('ecapAgencyIDControl', this.ecapAgencyIDControl);
  }

  SaveThirdPartyService(agencyID: number, recordExists: boolean = false): void {
    const thirdPatyServiceToSend: IAgencyLinkThirdPartyService = {
      AgencyID: agencyID,
      TexasRIDControl: this.texasRIDControl.value ? this.texasRIDControl.value : '',
      EcapAgencyIDControl: this.ecapAgencyIDControl.value ? this.ecapAgencyIDControl.value : '',
      TexasVIDControl: this.texasVIDControl.value ? this.texasVIDControl.value : ''
    };

    if (recordExists) {
      this.existingThirdPartyServices = thirdPatyServiceToSend;
      console.log('Third party services to update: ', this.existingThirdPartyServices);
    } else {
      if (thirdPatyServiceToSend.TexasRIDControl === '' && thirdPatyServiceToSend.EcapAgencyIDControl === '' && thirdPatyServiceToSend.TexasVIDControl === ''){ 

      } else {
        console.log('Third party services to send: ', thirdPatyServiceToSend);
        //this.agencyService.SendAgencyLinkThirdPartyService(thirdPatyServiceToSend).subscribe();
      }
    }
  }

  PrefillThirdParty(thirdPartyToFill: IAgencyLinkThirdPartyService) {
    this.texasRIDControl.setValue(thirdPartyToFill.TexasRIDControl);
    this.ecapAgencyIDControl.setValue(thirdPartyToFill.EcapAgencyIDControl);
    this.texasVIDControl.setValue(thirdPartyToFill.TexasVIDControl);
    this.value.set(thirdPartyToFill.TexasRIDControl);
    this.existingThirdPartyServices = thirdPartyToFill;
  }
}
