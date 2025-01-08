import { Component } from '@angular/core';
import { ChildInfoComponent } from './child-info/child-info.component';
import { ChildMenuComponent } from './child-menu/child-menu.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-placements',
  standalone: true,
  imports: [ChildInfoComponent, ChildMenuComponent, FormComponent],
  templateUrl: './placements.component.html',
  styleUrl: './placements.component.scss'
})
export class PlacementsComponent {
}
