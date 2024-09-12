import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Servico } from '../models/servico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http: HttpClient) { }

  create(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>(`${API_CONFIG.baseUrl}/servicos`, servico);
  }

  findById(codigo: string): Observable<Servico> {
    return this.http.get<Servico>(`${API_CONFIG.baseUrl}/servicos/${codigo}`);
  }

  findAll(): Observable<Servico[]> {
    return this.http.get<Servico[]>(`${API_CONFIG.baseUrl}/servicos`);
  }

  update(servico: Servico): Observable<Servico> {
    return this.http.put<Servico>(`${API_CONFIG.baseUrl}/servicos/${servico.codigo}`, servico);
  }

  delete(codigo: string): Observable<Servico> {
    return this.http.delete<Servico>(`${API_CONFIG.baseUrl}/servicos/${codigo}`);
  }
}
