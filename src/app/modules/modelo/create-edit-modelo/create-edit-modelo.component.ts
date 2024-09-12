import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Modelo } from './../../../models/modelo';
import { Component, Inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ModeloService } from 'src/app/services/modelo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-create-edit-modelo',
  templateUrl: './create-edit-modelo.component.html',
  styleUrls: ['./create-edit-modelo.component.scss']
})
export class CreateEditModeloComponent implements OnInit {

  modelo: Modelo = {
    codigo: '',
    nome: ''
  }

  formGroup: FormGroup;
  title!: string;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateEditModeloComponent>,  
    private toastr: ToastrService,
    private modeloService: ModeloService,
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
    this.title = "Cadastrar Modelo";
    if (this.data) {
      this.title = "Editar Modelo";
      this.modeloService.findById(this.data).pipe(first()).subscribe((x) => {
          this.modelo = x;
          //this.loading = false;
        });
    }  
  }

  transformarParaMaiusculas() {
    this.modelo.nome = this.modelo.nome.toUpperCase();
  }

  salvar() {
    //spiner=true
    this.saveMarca().pipe(first()).subscribe({next: (res) => {         
          this.toastr.success("Operação realizada com sucesso!", "Sucesso");
          this.dialogRef.close(true);
          this.formGroup.reset();  
          this.router.navigate(["/lista-modelo"], { queryParams: { create: true },});
        },
        error: (error) => {
          this.toastr.error(error, "Erro");
        },
      });
  }

  private saveMarca() {
    return this.modelo.codigo
      ? this.modeloService.update(this.modelo)
      : this.modeloService.create(this.modelo);
  }

  cancel(){
    this.dialogRef.close(true);
    this.formGroup.reset();
  }

}
