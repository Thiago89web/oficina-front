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
      ClienteOsComponent
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