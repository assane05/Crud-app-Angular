import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from '../add-edit/add-edit.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  constructor(private _dialog: MatDialog) {}

  ngOnInit(): void {}

  openAddEditEtudiant() {
    this._dialog.open(AddEditComponent);
  }
}
