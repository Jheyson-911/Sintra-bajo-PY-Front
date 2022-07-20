import { RepresentanteService } from './../../../../services/practica/representante.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EmpresaService } from './../../../../services/practica/empresa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {

  public empresas:Array<any> = [];
  public messageListEmpresa: String='';
  public messageDeleteEmpresa: String='';
  public messageCreateEmpresa: String='';
  public messageErrorEmpresa: String='';

  public representantes:Array<any> = [];
  public messageListRepresentante: String='';
  public messageDeleteRepresentante: String='';
  public messageCreateRepresentante: String='';
  public messageErrorRepresentante: String='';

  public EmpresaForm:FormGroup = new FormGroup({})
  public RepresentanteForm:FormGroup = new FormGroup({})

  constructor(private empresaService:EmpresaService, private representanteService:RepresentanteService) { }

  ngOnInit(): void {
    this.getEmpresas();
    this.getRepresentantes();

    this.EmpresaForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      ruc: new FormControl('', Validators.required),
    });

    this.RepresentanteForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      dni: new FormControl('', Validators.required),
      celular: new FormControl('', Validators.required),
      tblEmpresaId: new FormControl('', Validators.required),
    });
  }

  getEmpresas(){
    this.empresaService.getEmpresas().subscribe(
      (data:any) => {
        this.messageListEmpresa = data.message;
        this.empresas = data.empresas;
        console.log(data);
      }
    );
  }


  createEmpresa(){
    this.empresaService.createEmpresa(this.EmpresaForm.value).subscribe(
      (data:any) => {
        this.messageListEmpresa = data.message;
        this.empresas.push(data.empresa);
      }
    );
  }

  deleteEmpresa(id:number){
    this.empresaService.deleteEmpresa(id).subscribe(
      (data:any) => {
        this.messageListEmpresa = data.message;
        this.empresas = data.empresas;
      }
    );
  }

  getRepresentantes(){
    this.representanteService.getRepresentantes().subscribe(
      (data:any) => {
        this.messageListRepresentante = data.message;
        this.representantes = data.representantes;
        console.log(data);
      }
    );
  }

  createRepresentante(){
    this.representanteService.createRepresentante(this.RepresentanteForm.value).subscribe(
      (data:any) => {
        this.messageListRepresentante = data.message;
        this.representantes.push(data.representante);
      }
    );
  }

  deleteRepresentante(id:number){
    this.representanteService.deleteRepresentante(id).subscribe(
      (data:any) => {
        this.messageListRepresentante = data.message;
        this.representantes = data.representantes;
      }
    );
  }
}
