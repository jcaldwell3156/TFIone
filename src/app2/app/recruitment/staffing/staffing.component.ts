import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-staffing',
  standalone: true,
  imports: [MatSelectModule],
  templateUrl: './staffing.component.html',
  styleUrl: './staffing.component.scss'
})
export class StaffingComponent {
  staffingPersons: string[] = ['Bryan Hays', 'Laney Uphoff', 'Jared Belardo'];
}
