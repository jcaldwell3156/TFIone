import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { ErrorMessageComponent } from '../_common/error-message/error-message.component';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';

export interface Section {
  id: number;
  firstname: string;
  lastname: string;
  DOB: Date;
  img: string;
}

@Component({
  selector: 'tfi-kids',
  standalone: true,
  imports: [RouterModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule, MatListModule, MatDividerModule, MatIconModule, ErrorMessageComponent, CommonModule, DatePipe, MatTabsModule],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.scss'
})


export class KidsComponent {
  
  selectedId: number | null = null;   

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedId = +params.get('id')!;
      console.log('selected ' + this.selectedId);
    });
  }



  kiddos: Section[] = [    
    {id:1, lastname:'Homes', firstname:'Fred', img: '', DOB: new Date('1/28/16')},
    {id:2, lastname:'Davis', firstname:'Ashley', img: '../assets/img/kiddos/v3_0128513.jpg', DOB: new Date('1/28/16')},    
    {id:3, lastname:'Cook', firstname:'Luke', img: '../assets/img/kiddos/v3_0589002.jpg', DOB: new Date('1/28/16')},
    {id:4, lastname:'Covell', firstname:'Robert', img: '../assets/img/kiddos/v3_0998814.jpg', DOB: new Date('1/28/16')},
    {id:5, lastname:'Craig', firstname:'Susan', img: '', DOB: new Date('1/28/16')},    
    {id:6, lastname:'Crane', firstname:'Kyle', img: '../assets/img/kiddos/v3_0087053.jpg', DOB: new Date('1/28/16')},
    {id:7, lastname:'Dubin', firstname:'Amanda', img: '../assets/img/kiddos/v3_0793612.jpg', DOB: new Date('1/28/16')},
    {id:8, lastname:'Fraser', firstname:'Tim', img: '../assets/img/kiddos/v3_0571240.jpg', DOB: new Date('1/28/16')},    
    {id:9, lastname:'Skinner', firstname:'Jacks', img: '../assets/img/kiddos/v3_0269231.jpg', DOB: new Date('1/28/16')}
  ];

  navLinksCommon = [
    { path: 'child-plan', label: 'Child Plan' },
    { path: 'common-app', label: 'Common Application' },
    { path: 'contact-logs', label: 'Contact Logs' },
    { path: 'child-documents', label: 'Documents' },
    { path: 'person-information', label: 'Person Information' },
    { path: 'school-form', label: 'School Form' }
  ];
  navLinksMedical = [
    { path: '', label: 'Allergies' },
    { path: '', label: 'Medical Consenter' },
    { path: '', label: 'Medical Visits' },
    { path: '', label: 'Sensitive Child' }
  ];
  navLinksLegal = [
    { path: '', label: 'Court Case' },
    { path: '', label: 'Runaway Form' },
    { path: '', label: 'Serious Incidents' },
    { path: '', label: 'Sexual Abuse Form' },
    { path: '', label: 'No Contact Visitation Plan' }
  ];
  navLinksServices = [
    { path: '', label: 'Adoption Assistance' },
    { path: '', label: 'Foster Care Eligibility' },
    { path: '', label: 'Permanency Care Assistance' },
    { path: '', label: 'Service Authorization' },
    { path: '', label: 'Services and Referrals' }
  ];
  navLinksMisc = [
    { path: '', label: 'Assessments' },
    { path: '', label: 'Case Assignment Change' },
    { path: '', label: 'Monthly Case Review' },
    { path: '', label: 'Placement Update' },
    { path: '', label: 'Temporary Absence' },
    { path: '', label: 'Indigenous Child Status' }
  ];

  activeLink: any;

  getInitials(username: string): string | undefined {
    return username.split(" ").map(name => name[0]).join("");
  }  

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
    
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  /** form data */
  assigned = new FormControl('');
  assignedTos: string[] = ['You', 'Your Team', 'Anyone', 'Natacha Barclay'];
  defaultAssigned= 'You';

  sortBys: string[] = ['First Name', 'Last Name', 'DOB'];
  defaultSort= 'Last Name';
}
