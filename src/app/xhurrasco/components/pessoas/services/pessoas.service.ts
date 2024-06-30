import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoas } from './models/pessoas';

@Injectable({
  providedIn: 'root',
})
export class PessoasService {
  private url = 'http://localhost:8080/pessoa/buscarPessoas';
  constructor(private http: HttpClient) {}

  getPessoas(): Observable<Pessoas[]> {
    return this.http.get<Pessoas[]>(this.url);
  }
}
