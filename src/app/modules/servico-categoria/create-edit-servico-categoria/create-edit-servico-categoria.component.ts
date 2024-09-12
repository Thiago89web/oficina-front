import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { ServicoCategoria } from 'src/app/models/servico_categoria';
import { ServicoCategoriaService } from 'src/app/services/servico-categoria.service';

@Component({
  selector: 'app-create-edit-servico-categoria',
  templateUrl: './create-edit-servico-categoria.component.html',
  styleUrls: ['./create-edit-servico-categoria.component.scss']
})
export class CreateEditServicoCategoriaComponent implements OnInit {
  servicoCategoria: ServicoCategoria = {
    codigo: '',
    nome: ''
  }

  formGroup: FormGroup;
  title!: string;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateEditServicoCategoriaComponent>,  
    private toastr: ToastrService,
    private servicoCategoriaService: ServicoCategoriaService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    /*this.formGroup = this.fb.group({
      nome: ['', Validators.required]
    });*/
    this.formGroup.patchValue(this.data);   
  }

  ngAfterViewInit(): void {   
    this.title = "Cadastrar Serviço Categoria";
    if (this.data) {
      this.title = "Editar Serviço Categoria";
      this.servicoCategoriaService.findById(this.data).pipe(first()).subscribe((x) => {
          this.servicoCategoria = x;
          //this.loading = false;
        });
    }  
  }

  transformarParaMaiusculas() {
    this.servicoCategoria.nome = this.servicoCategoria.nome.toUpperCase();
  }

  salvar() {
    //spiner=true
    this.saveMarca().pipe(first()).subscribe({next: (res) => {         
          this.toastr.success("Operação realizada com sucesso!", "Sucesso");
          this.dialogRef.close(true);
          this.formGroup.reset();  
          this.router.navigate(["/lista-servico-categoria"], { queryParams: { create: true },});
        },
        error: (error) => {
          this.toastr.error(error, "Erro");
        },
      });
  }

  private saveMarca() {
    return this.servicoCategoria.codigo
      ? this.servicoCategoriaService.update(this.servicoCategoria)
      : this.servicoCategoriaService.create(this.servicoCategoria);
  }

  cancel(){
    this.dialogRef.close(true);
    this.formGroup.reset();
  }

}
