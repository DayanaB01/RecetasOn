import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { SweetsService } from 'src/app/services/sweets.service';

@Component({
  selector: 'app-new-sweet',
  templateUrl: './new-sweet.component.html',
  styleUrls: ['./new-sweet.component.css']
})
export class NewSweetComponent {

  formsweets: FormGroup;

  constructor(private sweetsServices: SweetsService){
    this.formsweets = new FormGroup({
      title: new FormControl(),
      ingredients: new FormControl(),
      process: new FormControl(),
      autor: new FormControl()
    })
  }

  async enviarPostre(){
    const res = await this.sweetsServices.addSweet(this.formsweets.value)
    console.log("Enviado: ", res)
  }

}
