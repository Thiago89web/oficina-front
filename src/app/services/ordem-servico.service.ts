import { Injectable } from '@angular/core';
import { OrdemServico } from '../models/ordem_servico';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdemServicoService {

  constructor(private http: HttpClient) { }

  create(ordemServico: OrdemServico): Observable<OrdemServico> {
    return this.http.post<OrdemServico>(`${API_CONFIG.baseUrl}/ordemServicos`, ordemServico);
  }

  findById(codigo: string): Observable<OrdemServico> {
    return this.http.get<OrdemServico>(`${API_CONFIG.baseUrl}/ordemServicos/${codigo}`);
  }

  findAll(): Observable<OrdemServico[]> {
    return this.http.get<OrdemServico[]>(`${API_CONFIG.baseUrl}/ordemServicos`);
  }

  update(ordemServico: OrdemServico): Observable<OrdemServico> {
    return this.http.put<OrdemServico>(`${API_CONFIG.baseUrl}/ordemServicos/${ordemServico.codigo}`, ordemServico);
  }

  delete(codigo: string): Observable<OrdemServico> {
    return this.http.delete<OrdemServico>(`${API_CONFIG.baseUrl}/ordemServicos/${codigo}`);
  }
}
