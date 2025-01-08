import { Component, inject, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DischargeService } from '../data/discharge.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { NoticeDetailComponent } from './notice-detail/notice-detail.component';
import { ErrorMessageComponent } from '../_common/error-message/error-message.component';

export interface DischargeNotice {
  id: number;
  stateRef: number;
  firstname: string;
  lastname: string;
  image: string;
  subDate: string;
  subBy: string;
  CPA: string;
  region: string;
  resource: string;
  disType: string;
  reasons: string;
  mitigation: string;
  recommendations: string;
}

const dischargeNoticeList: DischargeNotice[] = [
  {id:0, stateRef:82976380 , lastname:'Skinner', firstname:'Jacks', image: '../assets/img/kiddos/v3_0087053.jpg', subDate:'6/4/2024 3:20 PM', subBy:'Haggerty, Latravian', CPA:'Trusted Family Foundation, LLC', resource:'Jones, Diana', region:'2Ingage', disType:'30-day disruption notice (Non-Emergency)', reasons:'Child’s behavior', 
    mitigation:'Individual Therapy, Medication Management, Life Skills Mentorship, and Case Management. Redirection and one on one time.', 
    recommendations:'The recommendation is to place Jacks in a home that is more of a therapeutic environment that is specifically designed to aspanress his needs. This could include specialized schools, or residential treatment centers, where the staff or family are extensively trained to handle the intense behaviors that Jacks has been demonstrating. Jacks needs a home that can give him the one on one attention that he needs. Jacks will need to be placed with children his age and on his level. Jacks should not be placed in an evironments where they have to much movement. He needs a routine scheduled type programed home. Jacks will typicall make comments of self-harming when he is not allowed to do what he wants or whenever someone tries to direct him or changes in his behavior. It also apparent that Jacks does not like to have rules or be told the word "no". The recommendation is to place Jacks in a home that is more of a therapeutic environment that is specifically designed to aspanress his needs. This could include specialized schools, or residential treatment centers, where the staff or family are extensively trained to handle the intense behaviors that Jacks has been demonstrating. Jacks needs a home that can give him the one-on-one attention that he needs. Jacks will need to be placed with children his age and on his level. Jacks should not be placed in an environment where they have too much movement. He needs a routine scheduled type of programming in the home. Consistency and routine. Jacks will typically make comments of wanting to self-harm when he is not allowed to do what he wants or whenever someone tries to direct him or changes in his behavior. It is also apparent that Jacks does not like to have rules or be told the word "no". Jacks level of supervision should be specialized or intense. With his recent escalations in behaviors both at school and the home, the agency is requesting a discharge due to his constant yelling, crying, and wanting to be placed somewhere else and not adjusting to the home he is currently in.'
  },
  {id:1, stateRef:82976381 , lastname:'Homes', firstname:'Fred', image: '', subDate:'6/5/2024 1:30 PM', subBy:'Bricker, Kyle', CPA:'Trusted Family Foundation, LLC', resource:'Earp, Doug', region:'2Ingage', disType:'30-day disruption notice (Non-Emergency)', reasons:'Child’s behavior', 
    mitigation:'Individual Therapy, Medication Management, Life Skills Mentorship, and Case Management. Redirection and one on one time.', 
    recommendations:'The recommendation is to place Jacks in a home that is more of a therapeutic environment that is specifically designed to aspanress his needs. This could include specialized schools, or residential treatment centers, where the staff or family are extensively trained to handle the intense behaviors that Jacks has been demonstrating. Jacks needs a home that can give him the one on one attention that he needs. Jacks will need to be placed with children his age and on his level. Jacks should not be placed in an evironments where they have to much movement. He needs a routine scheduled type programed home. Jacks will typicall make comments of self-harming when he is not allowed to do what he wants or whenever someone tries to direct him or changes in his behavior. It also apparent that Jacks does not like to have rules or be told the word "no". The recommendation is to place Jacks in a home that is more of a therapeutic environment that is specifically designed to aspanress his needs. This could include specialized schools, or residential treatment centers, where the staff or family are extensively trained to handle the intense behaviors that Jacks has been demonstrating. Jacks needs a home that can give him the one-on-one attention that he needs. Jacks will need to be placed with children his age and on his level. Jacks should not be placed in an environment where they have too much movement. He needs a routine scheduled type of programming in the home. Consistency and routine. Jacks will typically make comments of wanting to self-harm when he is not allowed to do what he wants or whenever someone tries to direct him or changes in his behavior. It is also apparent that Jacks does not like to have rules or be told the word "no". Jacks level of supervision should be specialized or intense. With his recent escalations in behaviors both at school and the home, the agency is requesting a discharge due to his constant yelling, crying, and wanting to be placed somewhere else and not adjusting to the home he is currently in.'
  },
  {id:2, stateRef:82976382 , lastname:'Davis', firstname:'Ashley', image: '../assets/img/kiddos/v3_0128513.jpg', subDate:'6/6/2024 2:30 PM', subBy:"O'Toole, Ryan", CPA:'Trusted Family Foundation, LLC', resource:'Owens, Bob', region:'2Ingage', disType:'30-day disruption notice (Non-Emergency)', reasons:'Child’s behavior', 
    mitigation:'Individual Therapy, Medication Management, Life Skills Mentorship, and Case Management. Redirection and one on one time.', 
    recommendations:'The recommendation is to place Jacks in a home that is more of a therapeutic environment that is specifically designed to aspanress his needs. This could include specialized schools, or residential treatment centers, where the staff or family are extensively trained to handle the intense behaviors that Jacks has been demonstrating. Jacks needs a home that can give him the one on one attention that he needs. Jacks will need to be placed with children his age and on his level. Jacks should not be placed in an evironments where they have to much movement. He needs a routine scheduled type programed home. Jacks will typicall make comments of self-harming when he is not allowed to do what he wants or whenever someone tries to direct him or changes in his behavior. It also apparent that Jacks does not like to have rules or be told the word "no". The recommendation is to place Jacks in a home that is more of a therapeutic environment that is specifically designed to aspanress his needs. This could include specialized schools, or residential treatment centers, where the staff or family are extensively trained to handle the intense behaviors that Jacks has been demonstrating. Jacks needs a home that can give him the one-on-one attention that he needs. Jacks will need to be placed with children his age and on his level. Jacks should not be placed in an environment where they have too much movement. He needs a routine scheduled type of programming in the home. Consistency and routine. Jacks will typically make comments of wanting to self-harm when he is not allowed to do what he wants or whenever someone tries to direct him or changes in his behavior. It is also apparent that Jacks does not like to have rules or be told the word "no". Jacks level of supervision should be specialized or intense. With his recent escalations in behaviors both at school and the home, the agency is requesting a discharge due to his constant yelling, crying, and wanting to be placed somewhere else and not adjusting to the home he is currently in.'
  },
];

@Component({
  selector: 'app-discharge-notices',
  standalone: true,
  imports: [
    CommonModule,
    MatRadioModule, 
    MatInputModule, 
    MatSelectModule, 
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule,
    MatCheckboxModule, 
    MatIconModule, 
    MatButtonModule, 
    MatTooltipModule,
    ErrorMessageComponent
  ],  
  templateUrl: './discharge-notices.component.html',
  styleUrl: './discharge-notices.component.scss'
})

export class DischargeNoticesComponent {
 
  route: ActivatedRoute = inject(ActivatedRoute);
  dischargeService = inject(DischargeService);
  discharge: DischargeNotice | undefined;

  displayedColumns: string[] = ['stateRef', 'lastname', 'subDate', 'CPA', 'region', 'resource' ];  
  dataSource = new MatTableDataSource(dischargeNoticeList);    

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  selectedRow: any;
  onRowClick(row: any) {
    this.selectedRow = row;
    console.log(row);
  }

  getInitials(username: string): string | undefined {
    return username.split(" ").map(name => name[0]).join("");
  }  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** form data */
  dischargeReasons: string[] = ['Planned Move', 'Reason Two', 'Reason Three'];
  dischargeStatuses: string[] = ['Pending', 'Approved'];
  defaultStatus= 'Pending';
}