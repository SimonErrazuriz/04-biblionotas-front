import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ficha } from '../models/fichas';

@Injectable({
  providedIn: 'root'
})
export class FichasService {
  url_api = 'http://localhost:3000/api/fichas';
  constructor(private _http: HttpClient) { }

  getFichas() {
    return this._http.get<Ficha[]>(this.url_api + '/get');
  }

  getFicha(id: any) {
    return this._http.get<Ficha[]>(this.url_api + '/get1/' + id);
  }
  
  addFicha(ficha: Ficha) {
    return this._http.post(this.url_api + '/post', ficha);
  }

  deleteFicha(id: string) {
    return this._http.delete(this.url_api + '/delete'+ '/' + id);
  }
 
  updateFicha(ficha: Ficha) {
    return this._http.put(this.url_api + '/update'+ '/' + ficha._id, ficha);
  }
}
