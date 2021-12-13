import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private usuariosService: UsuariosService) { }

  intercept(req: { clone: (arg0: { setHeaders: { Authorization: string; }; }) => any; }, next: { handle: (arg0: any) => any; }) {
    const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.usuariosService.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }
}
