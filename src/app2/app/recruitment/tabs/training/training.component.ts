import {AfterViewInit, ChangeDetectionStrategy, Component, ViewChild, inject} from '@angular/core';
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

import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [MatSelectModule, MatButtonModule],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})

export class TrainingComponent {
  readonly dialog = inject(MatDialog);
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogTraining, {
      width: '1200px',
      height: '700px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  trainingSorts: string[] = ['Date', 'Title', 'Location', 'Trainers', 'ID'];
  defaultSort= 'Start Date';
}

@Component({
  selector: 'training-dialog',
  templateUrl: 'training-dialog.html',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatButtonModule, MatDatepickerModule, MatTableModule, MatSortModule, MatPaginatorModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './training.component.scss',
})

export class DialogTraining {
  readonly dialogRef = inject(MatDialogRef<DialogTraining>);

  displayedColumns: string[] = ['select', 'date', 'name', 'location', 'trainers'];
  dataSource = new MatTableDataSource<TrainingAvailable>(TRAINING_DATA);
  
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
  name: string;
  location: string;
  trainers: string;
}

const TRAINING_DATA: TrainingAvailable[] = [
  {date: '8/12/2024', name: 'Texas Family Initiative (Pre-Service Training', location: 'Fuller Residence', trainers: 'Diana Jones'},
  {date: '9/14/2024', name: 'Texas Family Initiative (Pre-Service Training', location: 'Fuller Residence', trainers: 'Alice Salazar'},
  {date: '10/10/2024', name: 'Texas Family Initiative (Pre-Service Training', location: 'Fuller Residence', trainers: 'Kevin Parker'},
  {date: '10/24/2024', name: 'Texas Family Initiative (Pre-Service Training', location: 'Fuller Residence', trainers: 'Kyle Bromley'},
  {date: '11/15/2024', name: 'Texas Family Initiative (Pre-Service Training', location: 'Fuller Residence', trainers: 'Jacqueline Slade'},  
];