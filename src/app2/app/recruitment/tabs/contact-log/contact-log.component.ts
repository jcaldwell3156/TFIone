import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { ErrorMessageComponent } from '../../../_common/error-message/error-message.component';

@Component({
  selector: 'app-contact-log',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [ErrorMessageComponent, MatDividerModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDatepickerModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './contact-log.component.html',
  styleUrl: './contact-log.component.scss'
})
export class ContactLogComponent {
  displayedColumns: string[] = ['date', 'type', 'reason', 'contact'];
  dataSource = new MatTableDataSource<ContactLog>(CONTACT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  contactTypes: string[] = ['Phone Call', 'Email', 'SMS Text', 'Letter'];

}

export interface ContactLog {
  date: string;
  type: string;
  reason: string;
  contact: string;
}

const CONTACT_DATA: ContactLog[] = [
  {date: '8/12/2024', type: 'Phone', reason: 'Info Application Package Sent', contact: 'Diana Jones'},
  {date: '9/15/2024', type: 'Email', reason: 'Worker Assignment', contact: 'Alice Salazar'},
  {date: '10/05/2024', type: 'SMS Text', reason: 'Worker Assignment', contact: 'Kevin Parker'},
  {date: '10/22/2024', type: 'Email', reason: 'Training Scheduled', contact: 'Kyle Bromley'},
  {date: '11/12/2024', type: 'Letter', reason: 'Licensing Pending Approval', contact: 'Jacqueline Slade'},
];