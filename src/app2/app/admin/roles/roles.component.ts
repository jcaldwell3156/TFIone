import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [SideNavComponent, MatTableModule, MatCheckboxModule, MatIconModule, MatButtonModule, MatTooltipModule],  
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {
  displayedColumns: string[]  = ['permission', 'agency', 'developer', 'supervisor', 'user'];
  dataSource = ROLE_DATA;
}

export interface Permissions {
  id: number;
  permission: string;
  description: string;
  agency: boolean;
  developer: boolean;
  supervisor: boolean;
  user: boolean;
}


const ROLE_DATA: Permissions[] = [
  {
    id:1,
    permission: 'User Management', 
    description: 'Add, edit, and remove users. Assign roles to give them access to specific sections of the platform',
    agency: true, 
    developer: true,
    supervisor: true,
    user: false,     
  },
  {
    id:2,
    permission: 'Placements', 
    description: 'Manage child placements',
    agency: true, 
    developer: true,
    supervisor: true,
    user: false,     
  } ,
  {
    id:3,
    permission: 'Onboarding', 
    description: 'Manage onboarding',
    agency: true, 
    developer: true,
    supervisor: true,
    user: false,     
  } 
];