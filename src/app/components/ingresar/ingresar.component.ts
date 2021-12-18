import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css'],
  providers: [UsuariosService]
})
export class IngresarComponent implements OnInit {
  public status!: String;
  public loading!: Boolean;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loading = false;
  }

  logUsuario(usuarioForm: NgForm) {
    this.loading = true;
    this.usuariosService.logUsuario(usuarioForm.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/fichas']);
      },
      err => {
        console.log(err);
        this.status = err.error.message;
        this.loading = false;
      }
    );
  }
}
