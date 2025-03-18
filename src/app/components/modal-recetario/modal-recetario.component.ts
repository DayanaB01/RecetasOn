import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-recetario',
  templateUrl: './modal-recetario.component.html',
  styleUrls: ['./modal-recetario.component.css']
})
export class ModalRecetarioComponent {
 constructor(public dialogRef: MatDialogRef<ModalRecetarioComponent>){}
}
