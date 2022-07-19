import { AuthTokenGuard } from './../../guards/auth-token.guard';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { DocenteComponent } from './components/docente/docente.component';
import { PersonaComponent } from './components/persona/persona.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Personas'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'personas'
      },
      {
        path: 'personas',
        component: PersonaComponent,
        data: {
          title: 'Personas'
        }
      },
      {
        path: 'docentes',
        component: DocenteComponent,
        data: {
          title: 'Docentes'
        }
      },
      {
        path: 'estudiantes',
        component: EstudianteComponent,
        data: {
          title: 'Estudiantes'
        }
      },
      {
        path: 'usuarios',
        component: UsuarioComponent,
        data: {
          title: 'Usuarios'
        }
      }
    ],
    canActivate: [AuthTokenGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }
