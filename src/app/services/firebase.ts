<<<<<<< HEAD
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Firebase {
  
}
=======
import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  private firestore = inject(Firestore);

  // READ (Ler)
  getContatos(): Observable<any[]> {
    const ref = collection(this.firestore, 'contatos');
    return collectionData(ref, { idField: 'id' });
  }

  // CREATE (Criar)
  addContato(contato: any) {
    const ref = collection(this.firestore, 'contatos');
    return addDoc(ref, contato);
  }

  // DELETE (Excluir)
  deleteContato(id: string) {
    const docRef = doc(this.firestore, `contatos/${id}`);
    return deleteDoc(docRef);
  }

  // UPDATE (Atualizar)
  updateContato(id: string, contato: any) {
    const docRef = doc(this.firestore, `contatos/${id}`);
    return updateDoc(docRef, contato);
  }
}
>>>>>>> 93d04cf (Projeto Finalizado Completo)
