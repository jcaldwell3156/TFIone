import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.open('An error has occured', 'close', {
      duration: 3000,
      panelClass: ['bg-error'],
      horizontalPosition: this.horizontalPosition,
    });
  }
}
