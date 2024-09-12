import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Marca } from 'src/app/models/marca';
import { MarcaService } from 'src/app/services/marca.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { CreateEditMarcaComponent } from '../create-edit-marca/create-edit-marca.component';

@Component({
  selector: 'app-lista-marca',
  templateUrl: './lista-marca.component.html',
  styleUrls: ['./lista-marca.component.scss']
})
export class ListaMarcaComponent implements OnInit {

  ELEMENT_DATA: Marca[] = []

  displayedColumns: string[] = ['id', 'nome', 'acoes'];
  dataSource = new MatTableDataSource<Marca>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private toast: ToastrService,
    private marcaService: MarcaService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.marcaService.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Marca>(resposta);
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
    const dialogRef = this.dialog.open(CreateEditMarcaComponent, {
      minWidth: '50%'
    });
    dialogRef.afterClosed().subscribe(result => { 
      this.findAll();    
    });
  }


  edit(id: string): void {
    let data = id;
    const dialogRef = this.dialog.open(CreateEditMarcaComponent, {
      data,
      minWidth: '50%'
    });
    dialogRef.afterClosed().subscribe(result => { 
      this.findAll();    
    });
  }
  
}
