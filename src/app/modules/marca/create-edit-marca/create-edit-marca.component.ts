import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { Marca } from 'src/app/models/marca';
import { MarcaService } from 'src/app/services/marca.service';

@Component({
  selector: 'app-create-edit-marca',
  templateUrl: './create-edit-marca.component.html',
  styleUrls: ['./create-edit-marca.component.scss']
})
export class CreateEditMarcaComponent implements OnInit {

  marca: Marca = {
    nome: ''
  }

  formGroup: FormGroup;
  title!: string;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateEditMarcaComponent>,  
    private toastr: ToastrService,
    private marcaService: MarcaService,
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
      this.marcaService.findById(this.data).pipe(first()).subscribe((x) => {
          this.marca = x;
          //this.loading = false;
        });
    }  
  }

  transformarParaMaiusculas() {
    this.marca.nome = this.marca.nome.toUpperCase();
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
    return this.marca.codigo
      ? this.marcaService.update(this.marca)
      : this.marcaService.create(this.marca);
  }

  cancel(){
    this.dialogRef.close(true);
    this.formGroup.reset();
  }

}
