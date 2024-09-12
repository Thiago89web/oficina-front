import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Servico } from 'src/app/models/servico';
import { ServicoService } from 'src/app/services/servico.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { CreateEditServicoComponent } from '../create-edit-servico/create-edit-servico.component';


@Component({
  selector: 'app-lista-servico',
  templateUrl: './lista-servico.component.html',
  styleUrls: ['./lista-servico.component.scss']
})
export class ListaServicoComponent implements OnInit {

  ELEMENT_DATA: Servico[] = []

  displayedColumns: string[] = ['codigo', 'nome', 'acoes'];
  dataSource = new MatTableDataSource<Servico>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private toast: ToastrService,
    private servicoService: ServicoService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.servicoService.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Servico>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(id: any): void {
    this.servicoService.delete(id).subscribe(() => { 
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

  add(): void {
    const dialogRef = this.dialog.open(CreateEditServicoComponent, {
      minWidth: '50%'
    });
    dialogRef.afterClosed().subscribe(result => { 
      this.findAll();    
    });
  }

  edit(id: string): void {
    let data = id;
    const dialogRef = this.dialog.open(CreateEditServicoComponent, {
      data,
      minWidth: '50%'
    });
    dialogRef.afterClosed().subscribe(result => { 
      this.findAll();    
    });
  }

}
