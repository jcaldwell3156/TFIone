import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-family-info',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './family-info.component.html',
  styleUrl: './family-info.component.scss'
})
export class FamilyInfoComponent {
  memberGenders: string[] = ['Unknown', 'Male', 'Female'];
  memberExperiences: string[] = ['Unknown', 'Transfer', 'Trained', 'New'];
}
