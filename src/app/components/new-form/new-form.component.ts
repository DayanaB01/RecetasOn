import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent {

    formulario: FormGroup;

    constructor(
      private placesService: PlacesService
    ){
     this.formulario = new FormGroup({
      title: new FormControl(),
      ingredients: new FormControl(),
      process: new FormControl(),
      autor: new FormControl()
     })
    }

    ngOnInit(): void{

    }
    
   async onSubmit(){
      console.log(this.formulario.value)
     const response= await this.placesService.addPlace(this.formulario.value)
     console.log("AQUI!!!",response)
    }
}
