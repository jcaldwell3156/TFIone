import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ActivityComponent } from './activity/activity.component';
import { AdoptionComponent } from './adoption/adoption.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatTabsModule, AuthorizationComponent, ActivityComponent, AdoptionComponent ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
}
