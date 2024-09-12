import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default.component';
import { HomeComponent } from './modules/home/home.component';
import { ListaStatusOrdemComponent } from './modules/status-ordem/lista-status-ordem/lista-status-ordem.component';
import { DetalhesOrdemComponent } from './modules/status-ordem/detalhes-ordem/detalhes-ordem.component';
import { NovaOsComponent } from './modules/status-ordem/nova-os/nova-os.component';
import { ClienteOsComponent } from './modules/status-ordem/cliente-os/cliente-os.component';
import { ListaMarcaComponent } from './modules/marca/lista-marca/lista-marca.component';
import { ListaModeloComponent } from './modules/modelo/lista-modelo/lista-modelo.component';
import { ListaProdutoComponent } from './modules/produto/lista-produto/lista-produto.component';
import { ListaProdutoCategoriaComponent } from './modules/produto-categoria/lista-categoria-produto/lista-produto-categoria.component';
import { ListaServicoComponent } from './modules/servico/lista-servico/lista-servico.component';
import { ListaServicoCategoriaComponent } from './modules/servico-categoria/lista-servico-categoria/lista-servico-categoria.component';
import { ListaVeiculoComponent } from './modules/veiculo/lista-veiculo/lista-veiculo.component';
import { ListaGarantiaComponent } from './modules/garantia/lista-garantia/lista-garantia.component';
import { ListaVendedorComponent } from './modules/vendedor/lista-vendedor/lista-vendedor.component';
import { ListaClienteComponent } from './modules/cliente/lista-cliente/lista-cliente.component';
import { ListaProdutoTipoComponent } from './modules/produto-tipo/lista-produto-tipo/lista-produto-tipo.component';
import { ListaPessoaComponent } from './modules/pessoa/lista-pessoa/lista-pessoa.component';


const routes: Routes = [
  {path: '', component: DefaultComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'nova-os', component: NovaOsComponent},
      {path: 'lista-pessoa', component: ListaPessoaComponent},
      {path: 'lista-status-ordem', component: ListaStatusOrdemComponent},
      {path: 'lista-cliente-os', component: ClienteOsComponent},
      {path: 'lista-cliente', component: ListaClienteComponent},
      {path: 'lista-marca', component: ListaMarcaComponent},
      {path: 'lista-modelo', component: ListaModeloComponent},
      {path: 'lista-garantia', component: ListaGarantiaComponent},
      {path: 'lista-produto', component: ListaProdutoComponent},
      {path: 'lista-produto-tipo', component: ListaProdutoTipoComponent},
      {path: 'lista-Produto-categoria', component: ListaProdutoCategoriaComponent},
      {path: 'lista-servico', component: ListaServicoComponent},
      {path: 'lista-servico-categoria', component: ListaServicoCategoriaComponent},
      {path: 'lista-veiculo', component: ListaVeiculoComponent},
      {path: 'lista-vendedor', component: ListaVendedorComponent},
      {path: 'detalhes-ordem/:id', component: DetalhesOrdemComponent}
   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
