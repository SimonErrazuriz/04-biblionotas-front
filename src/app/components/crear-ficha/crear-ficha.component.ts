import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FichasService } from 'src/app/services/fichas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-ficha',
  templateUrl: './crear-ficha.component.html',
  styleUrls: ['./crear-ficha.component.css'],
  providers: [FichasService]
})
export class CrearFichaComponent implements OnInit {

  constructor(
    private fichasService: FichasService,
    private router: Router) { }

  ngOnInit(): void {
  }


  addFicha(fichaForm: NgForm) {
    this.fichasService.addFicha(fichaForm.value).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/fichas']);
      },
      err => console.log(err)
    );
  }
}
