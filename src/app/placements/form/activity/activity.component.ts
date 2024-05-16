import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-activity',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule, MatDatepickerModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {
  dischargeReasons: string[] = ['Planned Move', 'Reason Two', 'Reason Three'];
  intakeSpecialists: string[] = ['Jimmy', 'Johnny', 'Jackie'];

  providers: string[] = ['Jimmy', 'Johnny', 'Jackie'];
  providerLocations: string[] = ['Kansas City', 'Dallas'];
  providerServices: string[] = ['Service 1', 'Service 2'];
  fameCodes: string[] = ['Code 1', 'Code 2'];
  activityReasons: string[] = ['Activity 1', 'Activity 2'];
}
