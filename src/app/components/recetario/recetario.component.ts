import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalRecetarioComponent } from '../modal-recetario/modal-recetario.component';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.css']
})
export class RecetarioComponent {
  textoBuscar = '';
  constructor( public dialog: MatDialog){}

  openModal() {
    const dialogRef = this.dialog.open(ModalRecetarioComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  buscar(){
    console.log('Buscando en una función')
  }
}
