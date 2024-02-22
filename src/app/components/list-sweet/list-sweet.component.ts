import { Component } from '@angular/core';
import Sweet from 'src/app/interfaces/sweet.interface';
import { SweetsService } from 'src/app/services/sweets.service';

@Component({
  selector: 'app-list-sweet',
  templateUrl: './list-sweet.component.html',
  styleUrls: ['./list-sweet.component.css']
})
export class ListSweetComponent {
  listaPostres: Sweet[];

  constructor( private SweetsServices: SweetsService){
    this.listaPostres=[{
      title: 'Titulo',
      ingredients: 'prueba',
      process:'prueba',
      autor:'prueba'
    }];
  }

  ngOnInit(): void{
    this.SweetsServices.getSweets().subscribe(sweets=>{
      this.listaPostres = sweets;
    })
  }

  async deleteS(sweet: Sweet){
    const res = this.SweetsServices.deleteSweet(sweet)
    console.log("Exitosamente eliminado")
  }
}
