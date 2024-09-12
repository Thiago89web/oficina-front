import { NgModule } from "@angular/core";
import { MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from '@angular/flex-layout';
import { AutoFocus } from "../directive/auto-focus.directive";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { LocalDateTimePipe } from "../pipe/local-date-time.pipe";
import { NgApexchartsModule } from "ng-apexcharts";
import { SharedModule } from "../shared/shared.module";
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatCardModule} from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';
import { MatIconModule} from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import { MatSelectModule } from "@angular/material/select";
import { MatSortModule } from "@angular/material/sort";
import { MatTooltipModule } from "@angular/material/tooltip";
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatExpansionModule} from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';


/*Components */
import { DefaultComponent } from "./default.component";
import { HomeComponent } from "../modules/home/home.component";
import { LocalDatePipe } from "../pipe/LocalDatePipe.pipe";
import { ListaStatusOrdemComponent } from "../modules/status-ordem/lista-status-ordem/lista-status-ordem.component";
import { DetalhesOrdemComponent } from "../modules/status-ordem/detalhes-ordem/detalhes-ordem.component";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DetalhesComponent } from "../modules/status-ordem/pages-detalhes/detalhes/detalhes.component";
import { HistoricoComponent } from "../modules/status-ordem/pages-detalhes/historico/historico.component";
import { ItensComponent } from "../modules/status-ordem/pages-detalhes/itens/itens.component";
import { ImagensComponent } from "../modules/status-ordem/pages-detalhes/imagens/imagens.component";
import { SimuladorComponent } from "../modules/status-ordem/pages-detalhes/simulador/simulador.component";
import { ComentariosComponent } from "../modules/status-ordem/pages-detalhes/comentarios/comentarios.component";
import { PercentFormatterPipe } from "../pipe/PercentFormatter.pipe";
import { NovaOsComponent } from "../modules/status-ordem/nova-os/nova-os.component";
import { ClienteOsComponent } from "../modules/status-ordem/cliente-os/cliente-os.component";
import { CreateEditClienteComponent } from "../modules/cliente/create-edit-cliente/create-edit-cliente.component";
import { ListaClienteComponent } from "../modules/cliente/lista-cliente/lista-cliente.component";
import { CreateEditCondutorComponent } from "../modules/condutor/create-edit-condutor/create-edit-condutor.component";
import { ListaCondutorComponent } from "../modules/condutor/lista-condutor/lista-condutor.component";
import { CreateEditGarantiaComponent } from "../modules/garantia/create-edit-garantia/create-edit-garantia.component";
import { ListaGarantiaComponent } from "../modules/garantia/lista-garantia/lista-garantia.component";
import { CreateEditMarcaComponent } from "../modules/marca/create-edit-marca/create-edit-marca.component";
import { ListaMarcaComponent } from "../modules/marca/lista-marca/lista-marca.component";
import { CreateEditModeloComponent } from "../modules/modelo/create-edit-modelo/create-edit-modelo.component";
import { ListaModeloComponent } from "../modules/modelo/lista-modelo/lista-modelo.component";
import { CreateEditOficinaComponent } from "../modules/oficina/create-edit-oficina/create-edit-oficina.component";
import { ListaOficinaComponent } from "../modules/oficina/lista-oficina/lista-oficina.component";
import { CreateEditOrcamentoComponent } from "../modules/orcamento/create-edit-orcamento/create-edit-orcamento.component";
import { ListaOrcamentoComponent } from "../modules/orcamento/lista-orcamento/lista-orcamento.component";
import { CreateEditOrdemServicoComponent } from "../modules/ordem-serviso/create-edit-ordem-servico/create-edit-ordem-servico.component";
import { ListaOrdemServicoComponent } from "../modules/ordem-serviso/lista-ordem-servico/lista-ordem-servico.component";
import { CreateEditPessoaComponent } from "../modules/pessoa/create-edit-pessoa/create-edit-pessoa.component";
import { ListaPessoaComponent } from "../modules/pessoa/lista-pessoa/lista-pessoa.component";
import { CreateEditProdutoComponent } from "../modules/produto/create-edit-produto/create-edit-produto.component";
import { ListaProdutoComponent } from "../modules/produto/lista-produto/lista-produto.component";
import { CreateEditServicoComponent } from "../modules/servico/create-edit-servico/create-edit-servico.component";
import { ListaServicoComponent } from "../modules/servico/lista-servico/lista-servico.component";
import { CreateEditVeiculoComponent } from "../modules/veiculo/create-edit-veiculo/create-edit-veiculo.component";
import { ListaVeiculoComponent } from "../modules/veiculo/lista-veiculo/lista-veiculo.component";
import { CreateEditVendedorComponent } from "../modules/vendedor/create-edit-vendedor/create-edit-vendedor.component";
import { ListaVendedorComponent } from "../modules/vendedor/lista-vendedor/lista-vendedor.component";
import { ListaProdutoCategoriaComponent } from "../modules/produto-categoria/lista-categoria-produto/lista-produto-categoria.component";
import { CreateEditProdutoCategoriaComponent } from "../modules/produto-categoria/create-edit-categoria-produto/create-edit-produto-categoria.component";
import { ListaServicoCategoriaComponent } from "../modules/servico-categoria/lista-servico-categoria/lista-servico-categoria.component";
import { CreateEditServicoCategoriaComponent } from "../modules/servico-categoria/create-edit-servico-categoria/create-edit-servico-categoria.component";
import { CreateEditProdutoTipoComponent } from "../modules/produto-tipo/create-edit-produto-tipo/create-edit-produto-tipo.component";
import { ListaProdutoTipoComponent } from "../modules/produto-tipo/lista-produto-tipo/lista-produto-tipo.component";


@NgModule({
    declarations: [
      LocalDateTimePipe,
      LocalDatePipe,
      PercentFormatterPipe,
      DefaultComponent,
      AutoFocus,
      HomeComponent,
      ListaStatusOrdemComponent,
      DetalhesOrdemComponent,
      DetalhesComponent,
      HistoricoComponent,
      ItensComponent,
      ImagensComponent,
      SimuladorComponent,
      ComentariosComponent,
      NovaOsComponent,
      ClienteOsComponent,
      ListaMarcaComponent,
    CreateEditMarcaComponent,
    ListaOficinaComponent,
    CreateEditOficinaComponent,
    ListaModeloComponent,
    CreateEditModeloComponent,
    ListaGarantiaComponent,
    CreateEditGarantiaComponent,
    ListaClienteComponent,
    CreateEditClienteComponent,
    ListaCondutorComponent,
    CreateEditCondutorComponent,
    ListaOrcamentoComponent,
    CreateEditOrcamentoComponent,
    ListaOrdemServicoComponent,
    CreateEditOrdemServicoComponent,
    ListaVendedorComponent,
    CreateEditVendedorComponent,
    ListaVeiculoComponent,
    CreateEditVeiculoComponent,
    ListaPessoaComponent,
    CreateEditPessoaComponent,
    ListaServicoComponent,
    CreateEditServicoComponent,
    ListaProdutoComponent,
    CreateEditProdutoComponent,
    ListaProdutoCategoriaComponent,
    CreateEditProdutoCategoriaComponent,
    ListaServicoCategoriaComponent,
    CreateEditServicoCategoriaComponent,
    CreateEditProdutoTipoComponent,
    ListaProdutoTipoComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,  
        MatFormFieldModule,
        BrowserAnimationsModule,
        RouterModule,
        SharedModule,
        MatSidenavModule,
        FlexLayoutModule,
        MatPaginatorModule,
        MatTableModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        ToastrModule.forRoot({
          timeOut: 4000,
          closeButton: true,
          progressBar: true
        }),       
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatRadioModule,
        NgxPaginationModule,
        MatListModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatToolbarModule,
        NgxMatSelectSearchModule,
        MatTooltipModule,
        MatSortModule,
        MatMenuModule,
        MatTabsModule,
        MatExpansionModule,
        NgxMaskDirective ,  
        NgxMaskPipe,
        MatCheckboxModule,
        NgApexchartsModule,
        MatButtonToggleModule
      ],
      providers:[
        LocalDateTimePipe, 
        LocalDatePipe,
        PercentFormatterPipe,
        provideEnvironmentNgxMask()
      ]
    })
    export class DefaultModule { }