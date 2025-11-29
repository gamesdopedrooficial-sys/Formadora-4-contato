<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
=======
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importante para o ngModel
import { IonicModule } from '@ionic/angular';
import { FirebaseService } from '../services/firebase';
import { Router, RouterLink } from '@angular/router';
>>>>>>> 93d04cf (Projeto Finalizado Completo)

@Component({
  selector: 'app-adicionar-contato',
  templateUrl: './adicionar-contato.page.html',
  styleUrls: ['./adicionar-contato.page.scss'],
  standalone: true,
<<<<<<< HEAD
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AdicionarContatoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
=======
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class AdicionarContatoPage {
  private firebaseService = inject(FirebaseService);
  private router = inject(Router);

  nome = '';
  email = '';

  async salvar() {
    if (this.nome && this.email) {
      await this.firebaseService.addContato({ nome: this.nome, email: this.email });
      this.router.navigate(['/listar-contatos']);
    }
  }
}
>>>>>>> 93d04cf (Projeto Finalizado Completo)
