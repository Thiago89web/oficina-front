import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default.component';
import { HomeComponent } from './modules/home/home.component';
import { ListaStatusOrdemComponent } from './modules/status-ordem/lista-status-ordem/lista-status-ordem.component';
import { DetalhesOrdemComponent } from './modules/status-ordem/detalhes-ordem/detalhes-ordem.component';
import { NovaOsComponent } from './modules/status-ordem/nova-os/nova-os.component';
import { ClienteOsComponent } from './modules/status-ordem/cliente-os/cliente-os.component';


const routes: Routes = [
  {path: '', component: DefaultComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'nova-os', component: NovaOsComponent},
      {path: 'lista-status-ordem', component: ListaStatusOrdemComponent},
      {path: 'lista-cliente-os', component: ClienteOsComponent},
      {path: 'detalhes-ordem/:id', component: DetalhesOrdemComponent}
   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
