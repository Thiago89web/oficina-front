import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { Oficina } from 'src/app/models/oficina';
import { OficinaService } from 'src/app/services/oficina.service';

@Component({
  selector: 'app-create-edit-oficina',
  templateUrl: './create-edit-oficina.component.html',
  styleUrls: ['./create-edit-oficina.component.scss']
})
export class CreateEditOficinaComponent {

  oficina: Oficina = {
    codigo: '',
    cod_pessoa: ''
  }

  formGroup: FormGroup;
  title!: string;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateEditOficinaComponent>,  
    private toastr: ToastrService,
    private oficinaService: OficinaService,
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
      this.oficinaService.findById(this.data).pipe(first()).subscribe((x) => {
          this.oficina = x;
          //this.loading = false;
        });
    }  
  }

  transformarParaMaiusculas() {
  //  this.oficina.nome = this.marca.nome.toUpperCase();
  }

  salvar() {
    //spiner=true
    this.saveMarca().pipe(first()).subscribe({next: (res) => {         
          this.toastr.success("Operação realizada com sucesso!", "Sucesso");
          this.dialogRef.close(true);
          this.formGroup.reset();  
          this.router.navigate(["/lista-oficina"], { queryParams: { create: true },});
        },
        error: (error) => {
          this.toastr.error(error, "Erro");
        },
      });
  }

  private saveMarca() {
    return this.oficina.codigo
      ? this.oficinaService.update(this.oficina)
      : this.oficinaService.create(this.oficina);
  }

  cancel(){
    this.dialogRef.close(true);
    this.formGroup.reset();
  }

}
