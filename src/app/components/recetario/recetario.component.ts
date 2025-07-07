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
  a: Place[];

  constructor( public dialog: MatDialog, private recetarioService: RecetarioService){
    this.recetas = [{
      title: 'Prueba de sitio',
      ingredients: '321',
      process: '-3',
      autor: 'NN',
      category:'opcional',
      public: '',
      description: 'comentario'
    }],
    this.a = [{
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
      this.a = this.recetas
      })
  }

  openModal(info: any) {
    const dialogRef = this.dialog.open(ModalRecetarioComponent, {
      data:{
        info: info,
      },
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

  buscar(){
    if (this.textoBuscar == '') {
      this.recetas = this.a;
    } else {
      this.recetas = this.recetas.filter((y)=>y.title.toLocaleLowerCase() == this.textoBuscar.toLocaleLowerCase())
    }
  }
}
