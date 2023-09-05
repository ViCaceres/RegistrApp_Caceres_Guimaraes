import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario={
    nombre:'',
    email:'',
    edad:'',
    password:'',
    jornada:'',
  }

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async mostrarMensaje(){
      const alert = await this.alertController.create({
        header: 'Gracias!!',
        message: 'Se a registrado Correctamente!',
        buttons: ['OK'],
      });
      await alert.present();
    }
  

  Enviar(){
   
    this.mostrarMensaje();
    this.usuario.nombre='';
    this.usuario.email='';
    this.usuario.password='';
    this.usuario.edad='';
    this.usuario.jornada='';

  }


}
