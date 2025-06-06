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
    option:[true, false] = [true, false];
    isDisable:boolean= false;
    close:boolean = true;

    constructor(
      private placesService: PlacesService, private userS: UsersService
    ){
     this.formulario = new FormGroup({
      title: new FormControl(),
      ingredients: new FormControl(),
      process: new FormControl(),
      autor: new FormControl(),
      category: new FormControl(),
      public: new FormControl(),
      description: new FormControl()
     })
    }

    ngOnInit(): void{
      const x = this.userS.miperfil();
      this.autor = x?.email;
    }
    
   async onSubmit(){
      await this.placesService.addPlace(this.formulario.value)
   }
}
