import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Place from 'src/app/interfaces/place.interface';
import { PlacesService } from 'src/app/services/places.service';
import { NewFormComponent } from '../new-form/new-form.component';
import { EditsRecipeComponent } from '../edits-recipe/edits-recipe.component';
import { RecetarioComponent } from '../recetario/recetario.component';
import { ModalRecetarioComponent } from '../modal-recetario/modal-recetario.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  places: Place[];

constructor( private PlacesService: PlacesService, public dialog: MatDialog){
  this.places = [{
    title: 'Prueba de sitio',
    ingredients: '321',
    process: '-3',
    autor: 'NN',
    category:'opcional',
    public: '',
    description: 'comentario'
  }];
}

ngOnInit(): void{
  this.PlacesService.getPlaces().subscribe(places=>{
    this.places = places;
  })
}

openReceta(){
  this.dialog.open(NewFormComponent,{
    width: '50%'
  });
}

async onClickDelete(place: Place){
  const res = this.PlacesService.deletePlace(place)
  alert("Eliminado con exito")
}

openEdit(recipe: any){
  this.dialog.open(EditsRecipeComponent,{
      data:{
        detalle:recipe, 
      }
  })
}

detalleCompleta(detalle: any){
  this.dialog.open(ModalRecetarioComponent,{
    data:{
      info: detalle,
    },
    width: '50%'
  })
}

}
