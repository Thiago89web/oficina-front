import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Endereco } from '../models/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }


  create(endereco: Endereco): Observable<Endereco> {
    return this.http.post<Endereco>(`${API_CONFIG.baseUrl}/enderecos`, endereco);
  }

  findById(codigo: string): Observable<Endereco> {
    return this.http.get<Endereco>(`${API_CONFIG.baseUrl}/enderecos/${codigo}`);
  }

  findAll(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(`${API_CONFIG.baseUrl}/enderecos`);
  }

  update(endereco: Endereco): Observable<Endereco> {
    return this.http.put<Endereco>(`${API_CONFIG.baseUrl}/enderecos/${endereco.codigo}`, endereco);
  }

  delete(codigo: string): Observable<Endereco> {
    return this.http.delete<Endereco>(`${API_CONFIG.baseUrl}/enderecos/${codigo}`);
  }
}
