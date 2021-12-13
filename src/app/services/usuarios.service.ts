import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url_api = 'http://localhost:3000/api/usuarios';
  constructor(private _http: HttpClient) { }

  addUsuario(usuario: Usuario) {
    return this._http.post(this.url_api + '/crear-usuario', usuario);
  }
  logUsuario(usuario: Usuario) {
    return this._http.post(this.url_api + '/ingresar', usuario);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  logOut() {
    localStorage.removeItem('token');
  }
}
