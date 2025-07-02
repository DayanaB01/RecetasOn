import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Place from 'src/app/interfaces/place.interface';
import { ModalRecetarioComponent } from '../modal-recetario/modal-recetario.component';
import { RecetarioService } from 'src/app/services/recetario.service';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.css']
})
export class RecetarioComponent {
  textoBuscar = '';
  recetas: Place[];

  constructor( public dialog: MatDialog, private recetarioService: RecetarioService){
    this.recetas = [{
      title: 'Prueba de sitio',
      ingredients: '321',
      process: '-3',
      autor: 'NN',
      category:'opcional',
      public: '',
      description: 'comentario'
    }]
  }

  ngOnInit(): void{
      this.recetarioService.getRecetas().subscribe(x=>{
       this.recetas = x.filter((z)=> z.public == 'Publicar' ); 
      })
  }

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
