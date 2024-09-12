import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProdutoCategoria } from 'src/app/models/produto_categoria';
import { CreateEditMarcaComponent } from '../../marca/create-edit-marca/create-edit-marca.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ProdutoCategoriaService } from 'src/app/services/produto-categoria.service';

@Component({
  selector: 'app-create-edit-produto-categoria',
  templateUrl: './create-edit-produto-categoria.component.html',
  styleUrls: ['./create-edit-produto-categoria.component.scss']
})
export class CreateEditProdutoCategoriaComponent implements OnInit {

  produtoCategoria: ProdutoCategoria = {
    codigo: '',
    nome: ''
  }

  formGroup: FormGroup;
  title!: string;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateEditMarcaComponent>,  
    private toastr: ToastrService,
    private produtoCategoriaService: ProdutoCategoriaService,
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
    this.title = "Cadastrar Marca";
    if (this.data) {
      this.title = "Editar Marca";
      this.produtoCategoriaService.findById(this.data).pipe(first()).subscribe((x) => {
          this.produtoCategoria = x;
          //this.loading = false;
        });
    }  
  }

  transformarParaMaiusculas() {
    this.produtoCategoria.nome = this.produtoCategoria.nome.toUpperCase();
  }

  salvar() {
    //spiner=true
    this.saveMarca().pipe(first()).subscribe({next: (res) => {         
          this.toastr.success("Operação realizada com sucesso!", "Sucesso");
          this.dialogRef.close(true);
          this.formGroup.reset();  
          this.router.navigate(["/lista-cargo"], { queryParams: { create: true },});
        },
        error: (error) => {
          this.toastr.error(error, "Erro");
        },
      });
  }

  private saveMarca() {
    return this.produtoCategoria.codigo
      ? this.produtoCategoriaService.update(this.produtoCategoria)
      : this.produtoCategoriaService.create(this.produtoCategoria);
  }

  cancel(){
    this.dialogRef.close(true);
    this.formGroup.reset();
  }

}
