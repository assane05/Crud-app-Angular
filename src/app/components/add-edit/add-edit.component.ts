import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EtudiantService } from '../../services/etudiant.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.css',
})
export class AddEditComponent implements OnInit {
  eduForm: FormGroup;
  level: string[] = ['Master', 'Licence', 'Baccalaureat', 'BFEM'];

  constructor(
    private _fb: FormBuilder,
    private etudiantService: EtudiantService,
    private dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private coreService: CoreService
  ) {
    this.eduForm = this._fb.group({
      prenom: '',
      nom: '',
      email: '',
      dob: '',
      genre: '',
      nivEtude: '',
      university: '',
      competence: '',
    });
  }

  ngOnInit(): void {
    this.eduForm.patchValue(this.data);
  }

  FormSubmit() {
    if (this.eduForm.valid) {
      if (this.data) {
        this.etudiantService
          .updateEtudiant(this.data.id, this.eduForm.value)
          .subscribe({
            next: (val: any) => {
              this.coreService.openSnackBar('Modification avec succès', 'done');
              this.dialogRef.close(true);
            },
            error(err) {
              console.log(err);
            },
          });
      } else {
        this.etudiantService.addEtudiant(this.eduForm.value).subscribe({
          next: (val: any) => {
            this.coreService.openSnackBar(
              'etudiant ajouté avec succès',
              'done'
            );

            this.dialogRef.close(true);
          },
          error(err) {
            console.log(err);
          },
        });
      }
    }
  }
}
