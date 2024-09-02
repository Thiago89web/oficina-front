import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DefaultModule } from './layouts/default.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { StorageService } from './services/storage.service';
import { DatePipe, registerLocaleData } from '@angular/common';
import { MatPaginatorIntlCro } from './paginator/paginator';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DefaultModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    //AuthInterceptorProvider,
    //ErrorInterceptorProvider,
    StorageService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
