import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(private snackbar: MatSnackBar) {}

  openSnackBar(message: string, action: string = 'Ok') {
    this.snackbar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top',
    });
  }
}
