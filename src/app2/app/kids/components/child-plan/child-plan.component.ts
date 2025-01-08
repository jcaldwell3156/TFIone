import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { HistoryComponent } from '../history/history.component';

@Component({
  selector: 'tfi-child-plan',
  standalone: true,
  imports: [MatTabsModule, HistoryComponent],
  templateUrl: './child-plan.component.html',
  styleUrl: './child-plan.component.scss'
})
export class ChildPlanComponent {

}
