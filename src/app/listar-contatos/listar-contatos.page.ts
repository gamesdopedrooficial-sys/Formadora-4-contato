<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
=======
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/api';
import { FirebaseService } from '../services/firebase';
import { addIcons } from 'ionicons';
import { trashOutline, createOutline, add, personCircleOutline } from 'ionicons/icons';
>>>>>>> 93d04cf (Projeto Finalizado Completo)

@Component({
  selector: 'app-listar-contatos',
  templateUrl: './listar-contatos.page.html',
  styleUrls: ['./listar-contatos.page.scss'],
  standalone: true,
<<<<<<< HEAD
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ListarContatosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
=======
  imports: [IonicModule, CommonModule, RouterLink]
})
export class ListarContatosPage implements OnInit {
  private api = inject(ApiService);
  private firebaseService = inject(FirebaseService);
  private alertController = inject(AlertController);

  listaApi: any = [];
  listaFirebase: any = [];

  constructor() {
    addIcons({ trashOutline, createOutline, add, personCircleOutline });
  }

  ngOnInit() {
    // Carrega API
    this.api.getUsers().subscribe((data: any) => this.listaApi = data);
    // Carrega Firebase
    this.firebaseService.getContatos().subscribe((data: any) => this.listaFirebase = data);
  }

  // Função Deletar
  async deletar(id: string) {
    await this.firebaseService.deleteContato(id);
  }

  // Função Editar (com Pop-up)
  async editar(contato: any) {
    const alert = await this.alertController.create({
      header: 'Editar Contato',
      inputs: [
        { name: 'nome', value: contato.nome, placeholder: 'Nome' },
        { name: 'email', value: contato.email, placeholder: 'Email' }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { 
          text: 'Salvar', 
          handler: (dados) => this.firebaseService.updateContato(contato.id, dados) 
        }
      ]
    });
    await alert.present();
  }
}
>>>>>>> 93d04cf (Projeto Finalizado Completo)
