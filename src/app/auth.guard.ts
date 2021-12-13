import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuariosService } from './services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  canActivate() {
    if (this.usuariosService.loggedIn()) {
      return true;
    }
    this.router.navigate(['/ingresar'])
    return false;
  }

}
