import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ConfirmDialogComponent } from "./components/confirm-dialog/confirm-dialog.component";
import { ErrorDialogComponent } from "./components/error-dialog/error-dialog.component";
import { HasProfileDirective } from "../directive/has-profile.directive";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatMenuModule } from "@angular/material/menu";
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
    declarations: [
      HeaderComponent,
      FooterComponent,
      SidebarComponent,
      ConfirmDialogComponent,
      ErrorDialogComponent,
      HasProfileDirective
      
    ],
    imports: [
      CommonModule,
      MatDividerModule,
      MatToolbarModule,
      MatIconModule,
      MatListModule,
      MatButtonModule,
      FlexLayoutModule,
      MatMenuModule,
      RouterModule,
      MatDialogModule,
      MatBadgeModule,
      MatExpansionModule
    ],
    exports: [
      HeaderComponent,
      FooterComponent,
      SidebarComponent,
      ConfirmDialogComponent,
      ErrorDialogComponent,
      HasProfileDirective
      
    ]
  })
  export class SharedModule { }