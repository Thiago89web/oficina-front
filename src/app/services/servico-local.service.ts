import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { ServicoLocal } from '../models/servico_local';

@Injectable({
  providedIn: 'root'
})
export class ServicoLocalService {

  constructor(private http: HttpClient) { }

  create(servicoLocal: ServicoLocal): Observable<ServicoLocal> {
    return this.http.post<ServicoLocal>(`${API_CONFIG.baseUrl}/servicoLocals`, servicoLocal);
  }

  findById(codigo: string): Observable<ServicoLocal> {
    return this.http.get<ServicoLocal>(`${API_CONFIG.baseUrl}/servicoLocals/${codigo}`);
  }

  findAll(): Observable<ServicoLocal[]> {
    return this.http.get<ServicoLocal[]>(`${API_CONFIG.baseUrl}/servicoLocals`);
  }

  update(servicoLocal: ServicoLocal): Observable<ServicoLocal> {
    return this.http.put<ServicoLocal>(`${API_CONFIG.baseUrl}/servicoLocals/${servicoLocal.codigo}`, servicoLocal);
  }

  delete(codigo: string): Observable<ServicoLocal> {
    return this.http.delete<ServicoLocal>(`${API_CONFIG.baseUrl}/servicoLocals/${codigo}`);
  }
}
