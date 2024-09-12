import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { ProdutoTipo } from 'src/app/models/produto_tipo';
import { ProdutoTipoService } from 'src/app/services/produto-tipo.service';

@Component({
  selector: 'app-create-edit-produto-tipo',
  templateUrl: './create-edit-produto-tipo.component.html',
  styleUrls: ['./create-edit-produto-tipo.component.scss']
})
export class CreateEditProdutoTipoComponent implements OnInit {

  produtoTipo: ProdutoTipo = {
    codigo: '',
    nome: '',
  }

  formGroup: FormGroup;
  title!: string;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateEditProdutoTipoComponent>,  
    private toastr: ToastrService,
    private produtoTipoService: ProdutoTipoService,
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
    this.title = "Cadastrar Tipo Produto";
    if (this.data) {
      this.title = "Editar Tipo Produto";
      this.produtoTipoService.findById(this.data).pipe(first()).subscribe((x) => {
          this.produtoTipo = x;
          //this.loading = false;
        });
    }  
  }

  transformarParaMaiusculas() {
    this.produtoTipo.nome = this.produtoTipo.nome.toUpperCase();
  }

  salvar() {
    //spiner=true
    this.saveMarca().pipe(first()).subscribe({next: (res) => {         
          this.toastr.success("Operação realizada com sucesso!", "Sucesso");
          this.dialogRef.close(true);
          this.formGroup.reset();  
          this.router.navigate(["/lista-produto-tipo"], { queryParams: { create: true },});
        },
        error: (error) => {
          this.toastr.error(error, "Erro");
        },
      });
  }

  private saveMarca() {
    return this.produtoTipo.codigo
      ? this.produtoTipoService.update(this.produtoTipo)
      : this.produtoTipoService.create(this.produtoTipo);
  }

  cancel(){
    this.dialogRef.close(true);
    this.formGroup.reset();
  }

}
