import { Component } from '@angular/core';

  interface Componente {
    name: string;
    icon: string;
    redirecTo: string;
  }

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes: Componente[] = [
    {
      name: 'iniciar sesion',
      icon: 'person-circle-outline',
      redirecTo: '/iniciarsesion'
    },
    {
      name:'Registrarse',
      icon:'people-circle-outline',
      redirecTo: '/registro'
    },
    {
      name:'Acerca De',
      icon:'megaphone-outline',
      redirecTo:'/acerca-de'
    }


  ]

  constructor() {}
}
