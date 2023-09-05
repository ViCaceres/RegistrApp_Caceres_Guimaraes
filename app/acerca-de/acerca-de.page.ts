import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage implements OnInit {

  constructor(private MenuController:MenuController) { }

  ngOnInit() {}

  mostrarMenu(){
    this.MenuController.open('first');
  }
}
