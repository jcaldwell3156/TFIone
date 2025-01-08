import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { HistoryComponent } from '../history/history.component';

@Component({
  selector: 'tfi-common-app',
  standalone: true,
  imports: [MatTabsModule, HistoryComponent],
  templateUrl: './common-app.component.html',
  styleUrl: './common-app.component.scss'
})
export class CommonAppComponent {

}
