import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';
import { Orcamento } from '../models/orcamento';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  constructor(private http: HttpClient) { }

  create(orcamento: Orcamento): Observable<Orcamento> {
    return this.http.post<Orcamento>(`${API_CONFIG.baseUrl}/orcamentos`, orcamento);
  }

  findById(codigo: string): Observable<Orcamento> {
    return this.http.get<Orcamento>(`${API_CONFIG.baseUrl}/orcamentos/${codigo}`);
  }

  findAll(): Observable<Orcamento[]> {
    return this.http.get<Orcamento[]>(`${API_CONFIG.baseUrl}/orcamentos`);
  }

  update(orcamento: Orcamento): Observable<Orcamento> {
    return this.http.put<Orcamento>(`${API_CONFIG.baseUrl}/orcamentos/${orcamento.codigo}`, orcamento);
  }

  delete(codigo: string): Observable<Orcamento> {
    return this.http.delete<Orcamento>(`${API_CONFIG.baseUrl}/orcamentos/${codigo}`);
  }
}
