import { Component, OnInit } from '@angular/core';
import { FichasService } from 'src/app/services/fichas.service';
import { Ficha } from 'src/app/models/fichas';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-ficha',
  templateUrl: './ver-ficha.component.html',
  styleUrls: ['./ver-ficha.component.css'],
  providers: [FichasService]
})
export class VerFichaComponent implements OnInit {
  public ficha!: any;
  public Editor = ClassicEditor;
  public FichaModel!: Ficha;


  constructor(
    private fichasService: FichasService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getFicha();
  }

  getFicha() {
    const id = this._route.snapshot.paramMap.get('id');
    this.fichasService.getFicha(id)
      .subscribe(
        res => {
          this.ficha = res;
        }
      );
  }

  public onChange({ editor }: ChangeEvent) {
    this.ficha.content = editor.getData();
    this.fichasService.updateFicha(this.ficha).subscribe();
  }
}