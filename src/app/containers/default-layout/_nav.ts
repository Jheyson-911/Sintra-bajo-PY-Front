import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Estudiantes'
  },
  {
    name: 'Docentes',
    url: '/persona/docentes',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Estudiantes',
    url: '/persona/estudiantes',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Usuarios',
    url: '/persona/usuarios',
    iconComponent: { name: 'cil-user' }
  },
  {
    title: true,
    name: 'Practicas',
  },
  {
    name: 'Informacion',
    url: '/practica/informacion',
    iconComponent: { name: 'cil-info' }
  },
  {
    name: 'Documentos',
    url: '/practica/documentos',
    iconComponent: { name: 'cil-file' }
  },
  {
    name: 'Convenios',
    url: '/practica/convenios',
    iconComponent: { name: 'cil-file' }
  },
  {
    name: 'Solicitudes',
    url: '/practica/solicitudes',
    iconComponent: { name: 'cil-file' }
  },
  {
    name:'Practicas',
    url: '/practica/practicas',
    iconComponent: { name: 'cil-file' }
  },
  {
    name: 'Empresa',
    url: '/practica/empresa',
    iconComponent: { name: 'cil-file' }
  },
  {
    name: 'Evaluacion',
    url: '/practica/evaluacion',
    iconComponent: { name: 'cil-file' }
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
      {
        name: 'Error 404',
        url: '/404'
      },
      {
        name: 'Error 500',
        url: '/500'
      }
    ]
  },
];
