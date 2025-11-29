import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

=======
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
>>>>>>> 93d04cf (Projeto Finalizado Completo)
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
<<<<<<< HEAD
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
=======
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,RouterLink],
>>>>>>> 93d04cf (Projeto Finalizado Completo)
})
export class HomePage {
  constructor() {}
}
