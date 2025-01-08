import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { ContactLogComponent } from './tabs/contact-log/contact-log.component';
import { FamilyInfoComponent } from "./tabs/family-info/family-info.component";
import { DocumentsComponent } from "./tabs/documents/documents.component";
import { ReferralComponent } from "./tabs/referral/referral.component";
import { MilestonesComponent } from "./milestones/milestones.component";
import { StaffingComponent } from "./staffing/staffing.component";
import { TrainingAssigned } from './tabs/training/training.assigned';
import { AgencyComponent } from "./tabs/agency/agency.component";

@Component({
  selector: 'app-recruitment',
  standalone: true,
  imports: [
    TrainingAssigned,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTabsModule,
    ContactLogComponent,
    FamilyInfoComponent,
    DocumentsComponent,
    ReferralComponent,
    MilestonesComponent,
    StaffingComponent,
    AgencyComponent
],
  templateUrl: './recruitment.component.html',
  styleUrl: './recruitment.component.scss'
})
export class RecruitmentComponent {

  /** form data */
  recruitmentStatuses: string[] = ['New', 'Pending', 'Approved'];
  defaultStatus= 'New';
}
