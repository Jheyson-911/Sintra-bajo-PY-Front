import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
  public messageLogout:String = "Sesion Cerrada";

  constructor(private classToggler: ClassToggleService, private cookieService:CookieService, private router:Router) {
    super();
  }
  logout() {
    this.cookieService.delete('token');
    this.router.navigate(['/login']);
    console.log(this.messageLogout);
  }
}
