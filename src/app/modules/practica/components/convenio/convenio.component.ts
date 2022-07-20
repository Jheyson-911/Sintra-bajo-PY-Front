import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ConvenioService } from './../../../../services/practica/convenio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convenio',
  templateUrl: './convenio.component.html',
  styleUrls: ['./convenio.component.scss']
})
export class ConvenioComponent implements OnInit {

  public convenios:Array<any> = [];
  public messageList: String='';
  public messageDelete: String='';
  public messageCreate: String='';
  public messageError: String='';

  public ConvenioForm:FormGroup = new FormGroup({})

  constructor(private convenioService:ConvenioService) { }

  ngOnInit(): void {
    this.getConvenio();

    this.ConvenioForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      url_image: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
    });
  }

  getConvenio(){
    this.convenioService.getConvenios().subscribe(
      (data:any) => {
        this.messageList = data.message;
        this.convenios = data.convenios;
        console.log(data);
      }
    );
  }

  createConvenio(){
    this.convenioService.createConvenio(this.ConvenioForm.value).subscribe(
      (data:any) => {
        this.messageList = data.message;
        this.convenios.push(data.convenios);
      }
    );
  }

  deleteConvenio(id:number){
    this.convenioService.deleteConvenio(id).subscribe(
      (data:any) => {
        this.messageList = data.message;
        this.convenios = data.convenios;
      }
    );
  }

}
