import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { ProdutoTipo } from '../models/produto_tipo';

@Injectable({
  providedIn: 'root'
})
export class ProdutoTipoService {

  constructor(private http: HttpClient) { }


  create(produtoTipos: ProdutoTipo): Observable<ProdutoTipo> {
    return this.http.post<ProdutoTipo>(`${API_CONFIG.baseUrl}/produtoTipos`, produtoTipos);
  }

  findById(codigo: string): Observable<ProdutoTipo> {
    return this.http.get<ProdutoTipo>(`${API_CONFIG.baseUrl}/produtoTipos/${codigo}`);
  }

  findAll(): Observable<ProdutoTipo[]> {
    return this.http.get<ProdutoTipo[]>(`${API_CONFIG.baseUrl}/produtoTipos`);
  }

  update(produtoTipos: ProdutoTipo): Observable<ProdutoTipo> {
    return this.http.put<ProdutoTipo>(`${API_CONFIG.baseUrl}/produtoTipos/${produtoTipos.codigo}`, produtoTipos);
  }

  delete(codigo: string): Observable<ProdutoTipo> {
    return this.http.delete<ProdutoTipo>(`${API_CONFIG.baseUrl}/produtoTipos/${codigo}`);
  }
}
