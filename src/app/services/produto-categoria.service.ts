import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { ProdutoCategoria } from '../models/produto_categoria';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoCategoriaService {

  constructor(private http: HttpClient) { }

  create(produtoCategoria: ProdutoCategoria): Observable<ProdutoCategoria> {
    return this.http.post<ProdutoCategoria>(`${API_CONFIG.baseUrl}/produtoCategorias`, produtoCategoria);
  }

  findById(codigo: string): Observable<ProdutoCategoria> {
    return this.http.get<ProdutoCategoria>(`${API_CONFIG.baseUrl}/produtoCategorias/${codigo}`);
  }

  findAll(): Observable<ProdutoCategoria[]> {
    return this.http.get<ProdutoCategoria[]>(`${API_CONFIG.baseUrl}/produtoCategorias`);
  }

  update(produtoCategoria: ProdutoCategoria): Observable<ProdutoCategoria> {
    return this.http.put<ProdutoCategoria>(`${API_CONFIG.baseUrl}/produtoCategorias/${produtoCategoria.codigo}`, produtoCategoria);
  }

  delete(codigo: string): Observable<ProdutoCategoria> {
    return this.http.delete<ProdutoCategoria>(`${API_CONFIG.baseUrl}/produtoCategorias/${codigo}`);
  }
}
