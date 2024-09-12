import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-create-edit-produto',
  templateUrl: './create-edit-produto.component.html',
  styleUrls: ['./create-edit-produto.component.scss']
})
export class CreateEditProdutoComponent implements OnInit {

  produto: Produto = {
    codigo: '',
    nome: '',
    preco: '',
    qtde: '',
    cod_produto_categoria: '',
    cod_produto_tipo: '',
    cod_pessoa_juridica: ''
  }

  formGroup: FormGroup;
  title!: string;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateEditProdutoComponent>,  
    private toastr: ToastrService,
    private produtoService: ProdutoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    /*this.formGroup = this.fb.group({
      nome: ['', Validators.required]
    });*/
    this.formGroup.patchValue(this.data);   
  }

  ngAfterViewInit(): void {   
    this.title = "Cadastrar Produto";
    if (this.data) {
      this.title = "Editar Produto";
      this.produtoService.findById(this.data).pipe(first()).subscribe((x) => {
          this.produto = x;
          //this.loading = false;
        });
    }  
  }

  transformarParaMaiusculas() {
    this.produto.nome = this.produto.nome.toUpperCase();
  }

  salvar() {
    //spiner=true
    this.saveMarca().pipe(first()).subscribe({next: (res) => {         
          this.toastr.success("Operação realizada com sucesso!", "Sucesso");
          this.dialogRef.close(true);
          this.formGroup.reset();  
          this.router.navigate(["/lista-produto"], { queryParams: { create: true },});
        },
        error: (error) => {
          this.toastr.error(error, "Erro");
        },
      });
  }

  private saveMarca() {
    return this.produto.codigo
      ? this.produtoService.update(this.produto)
      : this.produtoService.create(this.produto);
  }

  cancel(){
    this.dialogRef.close(true);
    this.formGroup.reset();
  }

}
