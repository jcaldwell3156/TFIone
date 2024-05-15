import { Component } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@Component({
  selector: 'app-child-info',
  standalone: true,
  imports: [CdkAccordionModule],
  templateUrl: './child-info.component.html',
  styleUrl: './child-info.component.scss'
})
export class ChildInfoComponent {
  items = ['Child Info', 'Case Info', 'Placement', 'Medical', 'Location'];
  expandedIndex = 0;
}
