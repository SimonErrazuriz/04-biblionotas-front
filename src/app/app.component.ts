import { Component, OnInit, DoCheck } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsuariosService],
})
export class AppComponent implements OnInit, DoCheck {
  public identificado: boolean = false;
  public usuario!: any;

  constructor(
    private usuariosService: UsuariosService) {
    this.identificado = false;
  }

  ngOnInit() {
    this.setIdentificado();
  }

  ngDoCheck() {
    this.setIdentificado();
  }

  logOut() {
    this.usuariosService.logOut();
  }

  setIdentificado() {
    if (this.usuariosService.loggedIn()) {
      this.identificado = true
    } else {
      this.identificado = false;
    }
  }
}
