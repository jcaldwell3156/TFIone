import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AgencyDTO } from '../../data/agency-dto';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { ErrorMessageComponent } from '../../_common/error-message/error-message.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'tfi-agencylist',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    ErrorMessageComponent,
    MatPaginator,
    MatSortModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './agencylist.component.html',
  styleUrl: './agencylist.component.scss',
})
export class AgencylistComponent implements AfterViewInit {
  _agencyDTO: AgencyDTO = inject(AgencyDTO);

  displayedColumns: string[] = ['AgencyID', 'AgencyName', 'State'];
  dataSource = new MatTableDataSource(this._agencyDTO.FetchAgencyTableData());

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  selectedRow: any;
  onRowClick(row: any) {
    this.selectedRow = row;
    console.log(row);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
