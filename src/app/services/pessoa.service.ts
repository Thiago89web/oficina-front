import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Pessoa } from '../models/pessoa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  create(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(`${API_CONFIG.baseUrl}/pessoas`, pessoa);
  }

  findById(codigo: string): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${API_CONFIG.baseUrl}/pessoas/${codigo}`);
  }

  findAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${API_CONFIG.baseUrl}/pessoas`);
  }

  update(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${API_CONFIG.baseUrl}/pessoas/${pessoa.codigo}`, pessoa);
  }

  delete(codigo: string): Observable<Pessoa> {
    return this.http.delete<Pessoa>(`${API_CONFIG.baseUrl}/pessoas/${codigo}`);
  }
}
