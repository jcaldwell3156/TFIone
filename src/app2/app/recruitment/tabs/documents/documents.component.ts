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
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ErrorMessageComponent } from '../../../_common/error-message/error-message.component';

@Component({
  selector: 'app-documents',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [ErrorMessageComponent, MatDividerModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDatepickerModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss'
})
export class DocumentsComponent {
  displayedColumns: string[] = ['date', 'category', 'file', 'addedby'];
  dataSource = new MatTableDataSource<Documents>(DOCUMENTS_DATA);

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

  fileName: string | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
    }
  }

}

export interface Documents {
  date: string;
  category: string;
  file: string;
  addedby: string;
}

const DOCUMENTS_DATA: Documents[] = [
  {date: '8/12/2024', category: 'Phone', file: 'Info Application Package Sent', addedby: 'Diana Jones'},
  {date: '9/15/2024', category: 'Email', file: 'Worker Assignment', addedby: 'Alice Salazar'},
  {date: '10/05/2024', category: 'SMS Text', file: 'Worker Assignment', addedby: 'Kevin Parker'},
  {date: '10/22/2024', category: 'Email', file: 'Training Scheduled', addedby: 'Kyle Bromley'},
  {date: '11/12/2024', category: 'Letter', file: 'Licensing Pending Approval', addedby: 'Jacqueline Slade'},
];