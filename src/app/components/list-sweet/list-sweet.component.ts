import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Sweet from 'src/app/interfaces/sweet.interface';
import { SweetsService } from 'src/app/services/sweets.service';
import { NewSweetComponent } from '../new-sweet/new-sweet.component';
import { ModalRecetarioComponent } from '../modal-recetario/modal-recetario.component';

@Component({
  selector: 'app-list-sweet',
  templateUrl: './list-sweet.component.html',
  styleUrls: ['./list-sweet.component.css']
})
export class ListSweetComponent {
  listaPostres: Sweet[];

  constructor( private SweetsServices: SweetsService,  public dialog: MatDialog){
    this.listaPostres=[{
      title: 'Titulo',
      description: 'lorem ipsu',
      ingredients: 'prueba',
      process:'prueba',
      public: 'false',
      autor:'prueba'
    }];
  }

  ngOnInit(): void{
    this.SweetsServices.getSweets().subscribe(sweets=>{
      this.listaPostres = sweets;
    })
  }

  crearPostre(){
    this.dialog.open(NewSweetComponent,{
      width: '50%',
    })
  }

  verMas(informacion: any){
    this.dialog.open(ModalRecetarioComponent,{
      data:{
        info: informacion,
      }
    })
  }

  async deleteS(sweet: Sweet){
    const res = this.SweetsServices.deleteSweet(sweet)
    console.log("Exitosamente eliminado")
  }
}
