import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ProdutoCategoria } from 'src/app/models/produto_categoria';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { CreateEditProdutoCategoriaComponent } from '../create-edit-categoria-produto/create-edit-produto-categoria.component';
import { MatDialog } from '@angular/material/dialog';
import { MarcaService } from 'src/app/services/marca.service';

@Component({
  selector: 'app-lista-produto-categoria',
  templateUrl: './lista-produto-categoria.component.html',
  styleUrls: ['./lista-produto-categoria.component.scss']
})
export class ListaProdutoCategoriaComponent implements OnInit {

  ELEMENT_DATA: ProdutoCategoria[] = []

  displayedColumns: string[] = ['codigo', 'nome', 'acoes'];
  dataSource = new MatTableDataSource<ProdutoCategoria>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private toast: ToastrService,
    private marcaService: MarcaService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.marcaService.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<ProdutoCategoria>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(id: any): void {
    this.marcaService.delete(id).subscribe(() => { 
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
    const dialogRef = this.dialog.open(CreateEditProdutoCategoriaComponent, {
      minWidth: '50%'
    });
    dialogRef.afterClosed().subscribe(result => { 
      this.findAll();    
    });
  }

  edit(id: string): void {
    let data = id;
    const dialogRef = this.dialog.open(CreateEditProdutoCategoriaComponent, {
      data,
      minWidth: '50%'
    });
    dialogRef.afterClosed().subscribe(result => { 
      this.findAll();    
    });
  }

}
