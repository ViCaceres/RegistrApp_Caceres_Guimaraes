import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.page.html',
  styleUrls: ['./iniciarsesion.page.scss'],
})
export class IniciarsesionPage implements OnInit {

  constructor(private alertController : AlertController) { }

  ngOnInit() {
  }

  async iniciarSesion() {
    const alert = await this.alertController.create({
      header: '¡Inicio exitoso!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
