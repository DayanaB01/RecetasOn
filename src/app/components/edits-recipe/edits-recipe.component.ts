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
  receta:any = this.data.detalle;
  key: string = this.data.detalle.id;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private placeServices: PlacesService) { 
    this.formularioedit = new FormGroup({
          title: new FormControl(this.receta.title),
          ingredients: new FormControl(this.receta.ingredients),
          process: new FormControl(this.receta.process),
          public: new FormControl(this.receta.public),
          description: new FormControl(this.receta.description)
    });
  }

  ngOnInit(): void{

  }

async onEditar(){
    this.formularioedit.value.autor = this.receta.autor;
    this.formularioedit.value.category = this.receta.category;
    await this.placeServices.getEditPlace(this.receta.id,this.formularioedit.value)
  }
}
