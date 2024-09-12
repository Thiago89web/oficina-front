import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateEditCondutorComponent } from '../create-edit-condutor/create-edit-condutor.component';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { Condutor } from 'src/app/models/condutor';
import { CondutorService } from 'src/app/services/condutor.service';

@Component({
  selector: 'app-lista-condutor',
  templateUrl: './lista-condutor.component.html',
  styleUrls: ['./lista-condutor.component.scss']
})
export class ListaCondutorComponent implements OnInit {

  ELEMENT_DATA: Condutor[] = []

  displayedColumns: string[] = ['id', 'nome', 'acoes'];
  dataSource = new MatTableDataSource<Condutor>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private toast: ToastrService,
    private condutorService: CondutorService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.condutorService.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Condutor>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(id: any): void {
    this.condutorService.delete(id).subscribe(() => { 
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
    const dialogRef = this.dialog.open(CreateEditCondutorComponent, {
      minWidth: '50%'
    });
    dialogRef.afterClosed().subscribe(result => { 
      this.findAll();    
    });
  }

  edit(id: string): void {
    let data = id;
    const dialogRef = this.dialog.open(CreateEditCondutorComponent, {
      data,
      minWidth: '50%'
    });
    dialogRef.afterClosed().subscribe(result => { 
      this.findAll();    
    });
  }

}
