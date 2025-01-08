import { Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { IAuthorizedSvc, ProcedureCodeList, ServiceTypeList, UnitTypeList } from '../../assets/models/IAuthorizedSvc';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, NgFor } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthorizedServicesService } from '../../assets/services/authorized-services.service';

@Component({
  selector: 'tfi-authorizedservies',
  standalone: true,
  imports: [MatFormFieldModule,
    MatSelectModule,
    NgFor,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    CommonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './authorizedservices.component.html',
  styleUrl: './authorizedservices.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class AuthorizedservicesComponent {
constructor(private fb:FormBuilder,private svc:AuthorizedServicesService){}
AgencyName = 'TFI Family Services'; //TODO: For Testing Purposes ONLY, Remove prior to production
agencyId = '2' ; //TODO: For Testing Purposes ONLY, Remove prior to production
private _snackBar = inject(MatSnackBar);
durationInSeconds = 3;
message ='';
action='';
ServiceTypeList = ServiceTypeList;
ProcedureCodeList = ProcedureCodeList;
UnitTypeList=UnitTypeList;

form = this.fb.group({
    authorizedServices:this.fb.array([this.createauthorizedService()]) 
});
   addAServiceToAgency() {
 this.form.controls.authorizedServices.push(this.createauthorizedService());
 this.save(this.form.controls.authorizedServices.value)
 
  }

 save(authSvc:any)
 {
    
  if(this.svc.SaveAllAuthorizedServicesForAgency(authSvc)==200)
    {
      this.message ="Saved Successfully";
    }else{
      this.message ="Failed To Save";
    }
    this.action= "Saving";
    this.openSnackBar(this.message,this.action);
 }

    createauthorizedService(){
      const authorizedService = this.fb.group({
        ServiceType:['',[Validators.required]],
        ProcedureCode:['',[Validators.required]],
        UnitType:['',[Validators.required]],
        begin:['',[Validators.required]],
        end:[''],
        sendToAllProviders:[''],
        AgencyId:[this.agencyId]
      });
      return authorizedService;
    }
    removeAServiceToAgency(index: number) {
      if(index >0){
        this.openSnackBar('Removing Item '+ index,"Remove")
        this.form.controls.authorizedServices.removeAt(index);
      }else{
        this.openSnackBar("Unable to Remove","Remove");
        
      }

      }
   
      openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action,{"duration": this.durationInSeconds *1000});
      }

}
