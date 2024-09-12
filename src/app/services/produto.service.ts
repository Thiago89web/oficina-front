import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Produto } from '../models/produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }


  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${API_CONFIG.baseUrl}/produtos`, produto);
  }

  findById(codigo: string): Observable<Produto> {
    return this.http.get<Produto>(`${API_CONFIG.baseUrl}/produtos/${codigo}`);
  }

  findAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${API_CONFIG.baseUrl}/produtos`);
  }

  update(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${API_CONFIG.baseUrl}/produtos/${produto.codigo}`, produto);
  }

  delete(id: string): Observable<Produto> {
    return this.http.delete<Produto>(`${API_CONFIG.baseUrl}/produtos/${id}`);
  }
}
