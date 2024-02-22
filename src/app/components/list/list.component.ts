import { Component } from '@angular/core';
import Place from 'src/app/interfaces/place.interface';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  places: Place[];

constructor( private PlacesService: PlacesService){
  this.places = [{
    title: 'Prueba de sitio',
    ingredients: '321',
    process: '-3',
    autor: 'NN'
  }];
}

ngOnInit(): void{
  this.PlacesService.getPlaces().subscribe(places=>{
    this.places = places;
  })
}

async onClickDelete(place: Place){
  const res = this.PlacesService.deletePlace(place)
  console.log("Eliminado con exito")
}
}
