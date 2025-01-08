import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild, inject} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ErrorMessageComponent } from '../../../_common/error-message/error-message.component';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-training-assigned',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatCheckboxModule, MatFormFieldModule, MatInputModule, MatTableModule, ErrorMessageComponent, MatSelectModule, MatButtonModule, MatDatepickerModule, MatPaginatorModule, MatSortModule],
  templateUrl: './training-assigned.html',
  styleUrl: './training.component.scss'
})

export class TrainingAssigned {
  readonly dialog = inject(MatDialog);
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogTraining, {
      width: '1200px',
      height: '700px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  displayedColumns: string[] = ['select', 'date', 'time', 'event', 'location', 'trainers'];
  dataSource = new MatTableDataSource<TrainingAssignedFamily>(TRAINING_ASSIGNED_DATA);

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

}

export interface TrainingAssignedFamily {
  date: string;
  time: string;
  event: string;
  location: string;
  trainers: string;
}
const TRAINING_ASSIGNED_DATA: TrainingAssignedFamily[] = [
  {date: '8/12/2024',  time: '10:00 AM', event: 'Texas Family Initiative (Pre-Service Training)', location: 'Fuller Residence', trainers: 'Diana Jones'},
  {date: '9/14/2024',  time: '11:00 AM', event: 'TFI Family Services (DT Training)', location: 'Virtual', trainers: 'Alice Salazar'},
  {date: '10/10/2024', time: '2:00 PM',  event: 'Texas Family Initiative (Pre-Service Training)', location: 'Fuller Residence', trainers: 'Kevin Parker'},
  {date: '10/24/2024', time: '4:00 PM',  event: 'TFI Family Services (DT Training)', location: 'Sebastiani Residence', trainers: 'Kyle Bromley'},
  {date: '11/15/2024', time: '6:00 PM',  event: 'Texas Family Initiative (Pre-Service Training)', location: 'Virtual', trainers: 'Jacqueline Slade'},  
];



// ***** MODAL/DIALOG *****

@Component({
  selector: 'training-dialog',
  templateUrl: 'training-dialog.html',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [ErrorMessageComponent, MatFormFieldModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatButtonModule, MatDatepickerModule, MatTableModule, MatSortModule, MatPaginatorModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './training.component.scss',
})

export class DialogTraining {
  readonly dialogRef = inject(MatDialogRef<DialogTraining>);

  displayedColumns: string[] = ['select', 'date', 'time', 'event', 'location', 'trainers'];
  dataSource = new MatTableDataSource<TrainingAvailable>(TRAINING_DATA);
  
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
}

export interface TrainingAvailable {
  date: string;
  time: string;
  event: string;
  location: string;
  trainers: string;
}
const TRAINING_DATA: TrainingAvailable[] = [
  {date: '8/12/2024', time: '10:00 AM', event: 'TFI Family Services (DT Training)', location: 'Virtual', trainers: 'Diana Jones'},
  {date: '9/14/2024', time: '11:00 AM', event: 'Texas Family Initiative (Pre-Service Training)', location: 'Sebastiani Residence', trainers: 'Alice Salazar'},
  {date: '10/10/2024',time: '2:00 PM',  event: 'Texas Family Initiative (Pre-Service Training)', location: 'Virtual', trainers: 'Kevin Parker'},
  {date: '10/24/2024',time: '4:00 PM',  event: 'TFI Family Services (DT Training)', location: 'Virtual', trainers: 'Kyle Bromley'},
  {date: '11/15/2024',time: '6:00 PM',  event: 'Texas Family Initiative (Pre-Service Training)', location: 'Fuller Residence', trainers: 'Jacqueline Slade'},  
];
