<<<<<<< HEAD
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  
}
=======
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
>>>>>>> 93d04cf (Projeto Finalizado Completo)
