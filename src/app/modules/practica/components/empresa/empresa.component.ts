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
  public messageList: String='';
  public messageDelete: String='';
  public messageCreate: String='';
  public messageError: String='';

  public EmpresaForm:FormGroup = new FormGroup({})

  constructor(private empresaService:EmpresaService) { }

  ngOnInit(): void {
    this.getEmpresas();

    this.EmpresaForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      ruc: new FormControl('', Validators.required),
    });
  }

  getEmpresas(){
    this.empresaService.getEmpresas().subscribe(
      (data:any) => {
        this.messageList = data.message;
        this.empresas = data.empresas;
        console.log(data);
      }
    );
  }


  createEmpresa(){
    this.empresaService.createEmpresa(this.EmpresaForm.value).subscribe(
      (data:any) => {
        this.messageList = data.message;
        this.empresas.push(data.empresa);
      }
    );
  }

  deleteEmpresa(id:number){
    this.empresaService.deleteEmpresa(id).subscribe(
      (data:any) => {
        this.messageList = data.message;
        this.empresas = data.empresas;
      }
    );
  }
}
