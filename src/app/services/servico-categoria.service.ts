import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { ServicoCategoria } from '../models/servico_categoria';

@Injectable({
  providedIn: 'root'
})
export class ServicoCategoriaService {

  constructor(private http: HttpClient) { }


  create(servicoCategoria: ServicoCategoria): Observable<ServicoCategoria> {
    return this.http.post<ServicoCategoria>(`${API_CONFIG.baseUrl}/servicoCategorias`, servicoCategoria);
  }

  findById(codigo: string): Observable<ServicoCategoria> {
    return this.http.get<ServicoCategoria>(`${API_CONFIG.baseUrl}/servicoCategorias/${codigo}`);
  }

  findAll(): Observable<ServicoCategoria[]> {
    return this.http.get<ServicoCategoria[]>(`${API_CONFIG.baseUrl}/servicoCategorias`);
  }

  update(servicoCategoria: ServicoCategoria): Observable<ServicoCategoria> {
    return this.http.put<ServicoCategoria>(`${API_CONFIG.baseUrl}/servicoCategorias/${servicoCategoria.codigo}`, servicoCategoria);
  }

  delete(codigo: string): Observable<ServicoCategoria> {
    return this.http.delete<ServicoCategoria>(`${API_CONFIG.baseUrl}/servicoCategorias/${codigo}`);
  }
}
