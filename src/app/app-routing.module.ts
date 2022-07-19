import { PageComponent } from './components/page/page.component';
import { AuthTokenGuard } from './guards/auth-token.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { DefaultLayoutComponent } from './containers';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'dashboard',
    component: PageComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'persona',
        loadChildren: () =>
          import('./modules/persona/persona.module').then((m) => m.PersonaModule)
      },
      {
        path: 'practica',
        loadChildren: () =>
          import('./modules/practica/practica.module').then((m) => m.PracticaModule)
      }
    ],
    canActivate: [AuthTokenGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthTokenGuard],
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
