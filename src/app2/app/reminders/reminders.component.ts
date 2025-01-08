import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ErrorMessageComponent } from '../_common/error-message/error-message.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-reminders',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatListModule, MatButtonModule, ErrorMessageComponent, NgIf],
  templateUrl: './reminders.component.html',
  styleUrl: './reminders.component.scss'
})
export class RemindersComponent {
  remindersList: string[] = ['Talk to Jimmy before next Monday', 'Send email to Margaret', 'Close the Johnson account', 'Handle placement setup', 'Finish onboarding for Smith account'];
}
