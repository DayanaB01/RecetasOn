import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SweetsService } from 'src/app/services/sweets.service';

@Component({
  selector: 'app-edits-postres',
  templateUrl: './edits-postres.component.html',
  styleUrls: ['./edits-postres.component.css']
})
export class EditsPostresComponent {
    postreEditar: FormGroup;
    postre: any= this.data.detalle;


    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private sweetService: SweetsService, private dialogRef: MatDialogRef<EditsPostresComponent>){
      this.postreEditar = new FormGroup({
        title: new FormControl(this.postre.title),
        description: new FormControl(this.postre.description),
        ingredients: new FormControl(this.postre.ingredients),
        process: new FormControl(this.postre.process),
        public: new FormControl(this.postre.public)
      })
    }

    async editarPostre(){
      this.postreEditar.value.autor = this.postre.autor;
      await this.sweetService.editSweet(this.postre.id, this.postreEditar.value)
      .then(()=>{
        this.dialogRef.close()
      })
    }

  cerrar(){
    this.dialogRef.close();
  }
}
