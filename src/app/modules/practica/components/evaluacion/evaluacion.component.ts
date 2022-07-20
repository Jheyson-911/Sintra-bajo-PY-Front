import { EvaluacionService } from './../../../../services/practica/evaluacion.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.scss']
})
export class EvaluacionComponent implements OnInit {

  public evaluaciones:Array<any> = [];
  public messageListEvaluacion: String='';
  public messageDeleteEvaluacion: String='';
  public messageCreateEvaluacion: String='';
  public messageErrorEvaluacion: String='';

  public items:Array<any> = [];
  public messageListItem: String='';
  public messageDeleteItem: String='';
  public messageCreateItem: String='';
  public messageErrorItem: String='';

  public contenidoItems:Array<any> = [];
  public messageListContenidoItem: String='';
  public messageDeleContenidoItem: String='';
  public messageCreaContenidoItem: String='';
  public messageErrContenidoItem: String='';

  public EvaluacionForm:FormGroup = new FormGroup({})
  public ItemForm:FormGroup = new FormGroup({})
  public ContenidoItemForm:FormGroup = new FormGroup({})


  constructor(private evaluacionService:EvaluacionService) { }

  ngOnInit(): void {
    this.getEvaluaciones();
    this.getItems();
    this.getContenidoItems();

    this.EvaluacionForm = new FormGroup({
      fase: new FormControl(''  , [Validators.required]),
      fecha: new FormControl(''  , [Validators.required]),
      estado: new FormControl(''  , [Validators.required]),
    });

    this.ItemForm = new FormGroup({
      titulo: new FormControl(''  , [Validators.required]),
    });

    this.ContenidoItemForm = new FormGroup({
      descripcion: new FormControl(''  , [Validators.required]),
      calificacion: new FormControl(''  , [Validators.required]),
    });
  }

  getEvaluaciones(){
    this.evaluacionService.getEvaluaciones().subscribe(
      (data:any) => {
        this.messageListEvaluacion = data.message;
        this.evaluaciones = data.evaluaciones;
        console.log(data);
      }
    );
  }

  getItems(){
    this.evaluacionService.getItems().subscribe(
      (data:any) => {
        this.messageListItem = data.message;
        this.items = data.items;
        console.log(data);
      }
    );
  }

  getContenidoItems(){
    this.evaluacionService.getContenidoItems().subscribe(
      (data:any) => {
        this.messageListContenidoItem = data.message;
        this.contenidoItems = data.contenidoItems;
        console.log(data);
      }
    );
  }

  createEvaluacion(){
    this.evaluacionService.createEvaluacion(this.EvaluacionForm.value).subscribe(
      (data:any) => {
        this.messageCreateEvaluacion = data.message;
        this.evaluaciones.push(data.evaluacion);
      }
    );
  }

  deleteEvaluacion(id:number){
    this.evaluacionService.deleteEvaluacion(id).subscribe(
      (data:any) => {
        this.messageDeleteEvaluacion = data.message;
        this.evaluaciones = data.evaluaciones;
      }
    );
  }

  createItem(){
    this.evaluacionService.createItem(this.ItemForm.value).subscribe(
      (data:any) => {
        this.messageListItem = data.message;
        this.items.push(data.item);
      }
    );
  }

  deleteItem(id:number){
    this.evaluacionService.deleteItem(id).subscribe(
      (data:any) => {
        this.messageListItem = data.message;
        this.items = data.items;
      }
    );
  }

  createContenidoItem(){
    this.evaluacionService.createContenidoItem(this.ContenidoItemForm.value).subscribe(
      (data:any) => {
        this.messageListContenidoItem = data.message;
        this.contenidoItems.push(data.contenidoItem);
      }
    );
  }

  deleteContenidoItem(id:number){
    this.evaluacionService.deleteContenidoItem(id).subscribe(
      (data:any) => {
        this.messageDeleContenidoItem = data.message;
        this.contenidoItems = data.contenidoItems;
      }
    );
  }
}
