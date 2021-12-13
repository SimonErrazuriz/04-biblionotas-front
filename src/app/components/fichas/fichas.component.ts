import { Component, OnInit } from '@angular/core';
import { FichasService } from 'src/app/services/fichas.service';
import { Ficha } from 'src/app/models/fichas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css'],
  providers: [FichasService]
})
export class FichasComponent implements OnInit {
  public fichas!: Ficha[];

  constructor(
    private fichasServices: FichasService,
    private router: Router) { }

  ngOnInit(): void {
    this.getFichas();
  }

  getFichas() {
    this.fichasServices.getFichas().subscribe(
      res => { this.fichas = res; }
    );
  }

  deleteFicha(id: string) {
    if (confirm('¿Estás seguro? ')) {
      this.fichasServices.deleteFicha(id).subscribe(
        res => {
          console.log(res);
          this.getFichas();
        },
        err => console.log(err)
      );
    }
  }
}
