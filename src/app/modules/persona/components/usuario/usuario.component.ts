import { UsuarioService } from './../../../../services/persona/usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  public usuarios:Array<any> = [];
  public messageList: String='';
  public messageDelete: String='';
  public messageCreate: String='';
  public messageError: String='';

  public UserForm:FormGroup = new FormGroup({})

  constructor(private userService:UsuarioService) { }

  ngOnInit(): void {
    this.getUsuario();

    this.UserForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rol : new FormControl('', Validators.required),
    });
  }

  getUsuario(){
    this.userService.getUsers().subscribe(
      (data:any) => {
        this.messageList = data.message;
        this.usuarios = data.users;
        console.log(data);
      }
    );
  }

  createUser(){
    this.userService.createUser(this.UserForm.value).subscribe(
      (data:any) => {
        this.messageList = data.message;
        this.usuarios.push(data.users);
      }
    );
  }
}
