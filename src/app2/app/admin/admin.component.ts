import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {
  MatTableModule,
  MatTableDataSource,
  MatTable,
} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ErrorMessageComponent } from '../_common/error-message/error-message.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { StaffManagementService } from '../../assets/services/staffmanagement.service';
import { IStaffManagementStaff } from '../../assets/models/IStaffManagementStaff';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from '../_common/spinner/spinner.component';

export interface UserMgmt {
  userID: number;
  username: string;
  image: string;
  role: string;
  status: string;
  title: string;
  dept: string;
  supervisor: string;
  location: string;
  type: string;
}

const USER_DATA: UserMgmt[] = [
  {
    userID: 1,
    username: 'John Caldwell',
    role: 'Developer',
    status: 'active',
    title: 'UI Engineer',
    dept: 'Software',
    supervisor: 'Sean Green',
    location: 'Overland Park, KS',
    type: 'Contractor',
    image: '',
  },
  {
    userID: 2,
    username: 'Faisal Alabdulkareem',
    role: 'Developer',
    status: 'active',
    title: 'Software Developer',
    dept: 'Software',
    supervisor: 'Sean Green',
    location: 'Wichita, KS',
    type: 'Full Time',
    image: '',
  },
  {
    userID: 3,
    username: 'Detrick DeBurr',
    role: 'Developer',
    status: 'active',
    title: 'Senior Software Developer',
    dept: 'Software',
    supervisor: 'Sean Green',
    location: 'Dallas, TX',
    type: 'Full Time',
    image: '',
  },
  {
    userID: 4,
    username: 'Kristina Abbott',
    role: 'Manager',
    status: 'active',
    title: 'Case Manager',
    dept: 'Permanency',
    supervisor: 'Gepetta Lewis',
    location: 'Dallas, TX',
    type: 'Full Time',
    image: '/assets/img/v3_0142900.jpg',
  },
  {
    userID: 5,
    username: 'Angie Adams',
    role: 'User',
    status: 'active',
    title: 'Foster Care Worker',
    dept: 'TFI Family Services',
    supervisor: 'Sean Green',
    location: 'Overland Park, KS',
    type: 'Full Time',
    image: '/assets/img/v3_0713726.jpg',
  },
];

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    SideNavComponent,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    NgIf,
    ErrorMessageComponent,
    MatProgressSpinnerModule,
    SpinnerComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements AfterViewInit, OnInit {
  staffManagementList: IStaffManagementStaff[] = [];
  displayedColumns: string[] = [
    'select',
    'id',
    'firstname',
    'middlename',
    'lastname',
    'preferredname',
    'emailaddress',
    'isactive',
  ];
  dataSource = new MatTableDataSource(this.staffManagementList);
  selection = new SelectionModel<IStaffManagementStaff>(true, []);
  isLoading: Boolean = false;

  constructor(private sms: StaffManagementService) {}

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }
  checkboxLabel(row?: IStaffManagementStaff): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.ID + 1
    }`;
  }
  @ViewChild(MatSort) sort = {} as MatSort;
  @ViewChild(MatPaginator) paginator = {} as MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.table.renderRows();
  }

  ngOnInit(): void {
    console.log('page initiated. Variable now:', this.staffManagementList);
    this.GetListOfStaffAndRefreshTable();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getInitials(username: string): string {
    return username
      .split(' ')
      .map((name) => name[0])
      .join('');
  }

  EnableStaffSelected(condition: boolean): void {
    this.isLoading = true;

    let selectedStaffList: IStaffManagementStaff[] = JSON.parse(
      JSON.stringify(this.selection.selected)
    );

    selectedStaffList.forEach((staff) => {
      staff.IsActive = condition;
    });
    this.dataSource.data = [];
    this.UpdateSelectedStaffs(selectedStaffList);
  }

  UpdateSelectedStaffs(staffList: IStaffManagementStaff[]): void {
    staffList.forEach((staff, index) => {
      this.sms.UpdateStaff(staff).subscribe({
        next: () => {
          this.isLoading = true;
        },
        error: (err) => {
          this.isLoading = false;
          console.log('error message: \n', err);
        },
        complete: () => {
          if (index == staffList.length - 1) {
            this.dataSource.data = [];
            this.GetListOfStaffAndRefreshTable();
          }
        },
      });
    });
  }

  GetListOfStaffAndRefreshTable(): void {
    this.isLoading = true;
    this.sms.GetListOfStaff().subscribe({
      next: (response) => {
        this.staffManagementList = response;
      },
      error: (err) => {
        this.isLoading = false;
        console.log('ERROR:', err);
      },
      complete: () => {
        setTimeout(() => {
          this.isLoading = false;
          this.dataSource.data = this.staffManagementList;
        }, 3000);
      },
    });
  }

}
