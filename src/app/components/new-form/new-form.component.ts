import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PlacesService } from 'src/app/services/places.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent {

    formulario: FormGroup;
    autor: any = "";
    options: [String, String, String] = ['Estrella', 'Entrada', 'principal'];
    option:[String, String] = ['Publicar', 'No publicar'];
    isDisable:boolean = false;
    close:boolean = true;

    constructor(
      private placesService: PlacesService, private userS: UsersService
    ){
     this.formulario = new FormGroup({
      title: new FormControl(),
      ingredients: new FormControl(),
      process: new FormControl(),
      category: new FormControl(),
      autor: new FormControl(),
      public: new FormControl(),
      description: new FormControl()
     })
    }

    ngOnInit(): void{
      const x = this.userS.miperfil();
      //this.autor = x?.email;
      this.autor = x?.uid;
      //console.log("info del autor: ", x?.uid, x?.email)
    }
    
async enviarReceta(){
    this.formulario.value.autor = this.autor;
    console.log("Formulario: ",this.formulario, " autor: ", this.formulario.value.autor)
      await this.placesService.addPlace(this.formulario.value)
   }
}
