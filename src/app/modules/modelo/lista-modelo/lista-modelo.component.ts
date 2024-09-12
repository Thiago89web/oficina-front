import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Modelo } from 'src/app/models/modelo';
import { ModeloService } from 'src/app/services/modelo.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { CreateEditModeloComponent } from '../create-edit-modelo/create-edit-modelo.component';

@Component({
  selector: 'app-lista-modelo',
  templateUrl: './lista-modelo.component.html',
  styleUrls: ['./lista-modelo.component.scss']
})
export class ListaModeloComponent implements OnInit {

  ELEMENT_DATA: Modelo[] = []

  displayedColumns: string[] = ['codigo', 'nome', 'acoes'];
  dataSource = new MatTableDataSource<Modelo>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private toast: ToastrService,
    private modeloService: ModeloService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.modeloService.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Modelo>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(id: any): void {
    this.modeloService.delete(id).subscribe(() => { 
      this.toast.success('Registro deletado com sucesso', 'Delete');
      this.findAll()
    }, ex => {
      if(ex.error.errors) {
        ex.error.errors.forEach((element: { message: string | undefined; }) => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }

  openDialog(id: number) {
    const dialogRef  = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Deseja realmente excluir o registro da lista?'
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
          this.delete(id);
      }
    });
  }

  add(): void {
    const dialogRef = this.dialog.open(CreateEditModeloComponent, {
      minWidth: '50%'
    });
    dialogRef.afterClosed().subscribe(result => { 
      this.findAll();    
    });
  }


  edit(id: string): void {
    let data = id;
    const dialogRef = this.dialog.open(CreateEditModeloComponent, {
      data,
      minWidth: '50%'
    });
    dialogRef.afterClosed().subscribe(result => { 
      this.findAll();    
    });
  }

}
