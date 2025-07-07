import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-recetario',
  templateUrl: './modal-recetario.component.html',
  styleUrls: ['./modal-recetario.component.css']
})
export class ModalRecetarioComponent {
  formDetalle: FormGroup; 
  informacion: any = this.data.info;

 constructor(public dialogRef: MatDialogRef<ModalRecetarioComponent>, @Inject(MAT_DIALOG_DATA) public data:any){
  this.formDetalle = new FormGroup({
    title: new FormControl(this.data.info.title),
    description: new FormControl(this.data.info.description),
    ingredients: new FormControl(this.data.info.ingredients),
    process: new FormControl(this.data.info.process)
  })
 }

}
