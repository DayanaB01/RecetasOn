import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-edits-recipe',
  templateUrl: './edits-recipe.component.html',
  styleUrls: ['./edits-recipe.component.css']
})
export class EditsRecipeComponent implements OnInit{
  formularioedit: FormGroup;
  receta:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private placeServices: PlacesService) { 
    this.formularioedit = new FormGroup({
          title: new FormControl(this.data.detalle.title),
          ingredients: new FormControl(this.data.detalle.ingredients),
          process: new FormControl(this.data.detalle.process),
          public: new FormControl(this.data.detalle.public),
          description: new FormControl(this.data.detalle.description)
    });
  }

  ngOnInit(): void{
     this.receta = this.data.detalle;
  }

async onEditar(){
    //PASAR LA IF Y DESPUES EDITAR
    console.log("Edicion de inforación: ", this.formularioedit.value)
    await this.placeServices.getEditPlace(this.formularioedit.value)
  }
}
