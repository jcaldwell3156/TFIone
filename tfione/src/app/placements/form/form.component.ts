import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatTabsModule, MatRadioModule, MatDatepickerModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  authPersons: string[] = ['Jimmy', 'Johnny', 'Jackie'];
  authProviders: string[] = ['Jimmy', 'Johnny', 'Jackie'];
  authProviderLocations: string[] = ['Kansas City', 'Dallas'];
  authRequestTypes: string[] = ['Reimbursable', 'Non-Reimbursable', 'One-time Service'];
}
