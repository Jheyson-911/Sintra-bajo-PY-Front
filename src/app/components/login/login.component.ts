import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = new FormGroup({});

  constructor(private authService:AuthService, private router:Router, private cookieService:CookieService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.minLength(3)]),
      password: new FormControl('',[Validators.required, Validators.minLength(3)]),
    });
  }

  iniciarSesion(){
    this.authService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        if(data.message === 'User logged'){
          this.cookieService.set('token',data.token);
          this.router.navigate(['/dashboard']);
        }else{
          alert('Usuario o contraseña incorrectos');
        }
      }
    )
  }

}
