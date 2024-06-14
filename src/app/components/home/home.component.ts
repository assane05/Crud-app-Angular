import { Component, OnInit, ViewChild } from '@angular/core';
import { EtudiantService } from '../../services/etudiant.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'prenom',
    'nom',
    'email',
    'dob',
    'genre',
    'nivEtude',
    'university',
    'competence',
    'actions',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private etudiantService: EtudiantService,
    private coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.lisEtudiant();
  }
  // mise à jour après ajout
  openAddEditEtudiant() {
    const dialogRef = this._dialog.open(AddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.lisEtudiant();
        }
      },
    });
  }

  // affichage liste etudiant
  lisEtudiant() {
    this.etudiantService.lisEtudiant().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }
  // suppression etudiant
  deleteEtudiant(id: number) {
    this.etudiantService.deleteEtudiant(id).subscribe({
      next: (res) => {
        this.coreService.openSnackBar('etudiant supprimé avec succès', 'done');
        this.lisEtudiant();
      },
      error: console.log,
    });
  }

  // modifier un etudiant
  EditEtudiant(data: any) {
    const dialogRef = this._dialog.open(AddEditComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.lisEtudiant();
        }
      },
    });
  }

  // le filtre des donnees du tableau
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
