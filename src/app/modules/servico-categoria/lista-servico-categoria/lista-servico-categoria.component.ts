import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ServicoCategoria } from 'src/app/models/servico_categoria';
import { ServicoCategoriaService } from 'src/app/services/servico-categoria.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { CreateEditServicoCategoriaComponent } from '../create-edit-servico-categoria/create-edit-servico-categoria.component';

@Component({
  selector: 'app-lista-servico-categoria',
  templateUrl: './lista-servico-categoria.component.html',
  styleUrls: ['./lista-servico-categoria.component.scss']
})
export class ListaServicoCategoriaComponent {

  servicoCategoria: ServicoCategoria = {
    nome: ''
  }

  ELEMENT_DATA: ServicoCategoria[] = []

  displayedColumns: string[] = ['codigo', 'nome', 'acoes'];
  dataSource = new MatTableDataSource<ServicoCategoria>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private toast: ToastrService,
    private servicoCategoriaService: ServicoCategoriaService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.servicoCategoriaService.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<ServicoCategoria>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(id: any): void {
    this.servicoCategoriaService.delete(id).subscribe(() => { 
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
        message: 'Deseja realmente excluir o motivo da lista?'
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
          this.delete(id);
      }
    });
  }

  addCargo(): void {
    const dialogRef = this.dialog.open(CreateEditServicoCategoriaComponent, {
      minWidth: '50%'
    });
    dialogRef.afterClosed().subscribe(result => { 
      this.findAll();    
    });
  }


  edit(id: string): void {
    let data = id;
    const dialogRef = this.dialog.open(CreateEditServicoCategoriaComponent, {
      data,
      minWidth: '50%'
    });
    dialogRef.afterClosed().subscribe(result => { 
      this.findAll();    
    });
  }

}
