import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { Servico } from 'src/app/models/servico';
import { ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-create-edit-servico',
  templateUrl: './create-edit-servico.component.html',
  styleUrls: ['./create-edit-servico.component.scss']
})

export class CreateEditServicoComponent implements OnInit {

  servico: Servico  = {
    codigo: '',
    cod_entidade: '',
    nome: '',
    descricao: '',
    preco: '',
    qtde: '',
    cod_servico_categoria: '',
    cod_servico_local: ''
  }

  formGroup: FormGroup;
  title!: string;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateEditServicoComponent>,  
    private toastr: ToastrService,
    private servicoService: ServicoService,
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
      this.servicoService.findById(this.data).pipe(first()).subscribe((x) => {
          this.servico = x;
          //this.loading = false;
        });
    }  
  }

  transformarParaMaiusculas() {
    this.servico.nome = this.servico.nome.toUpperCase();
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
    return this.servico.codigo
      ? this.servicoService.update(this.servico)
      : this.servicoService.create(this.servico);
  }

  cancel(){
    this.dialogRef.close(true);
    this.formGroup.reset();
  }

}
